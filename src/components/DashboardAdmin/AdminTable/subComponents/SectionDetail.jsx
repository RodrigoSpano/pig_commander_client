import React, { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import StarRating from "@/components/Landing/Reviews/StarRating";
import { HiTrash } from "react-icons/hi";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "@/redux/actions/reviewsAction";
import { setReviews } from "@/redux/features/reviewsSlice";

const SectionDetail = ({ totalIncomes, totalExpenses, user }) => {
  const [cookies, setCookies] = useCookies();
  const dispatch = useDispatch();
  const { review } = user;

  const oneReview = useSelector((state) => state.reviews.oneReview);
  const allReviews = useSelector((state) => state.reviews.allReviews);

  const filterReviews = allReviews.filter(
    (review) => review.user_id === user.id
  );

  useEffect(() => {
    dispatch(setReviews(filterReviews[0]?.id));
  }, []);

  const handleDelete = () => {
    dispatch(deleteReview({ token: cookies.token, id: review.id }));
  };
  return (
    <div className={"flex gap-4 flex-col items-center justify-center "}>
      <div className="flex flex-col">
        <Tabs aria-label="Options">
          <Tab key="Balance" title="Balance">
            <Card>
              <CardBody className={"flex items-center  gap-2"}>
                <h2 className="text-xl font-semibold">Total</h2>
                <p>
                  ${" "}
                  {totalIncomes - totalExpenses <= 0
                    ? 0
                    : totalIncomes - totalExpenses}
                </p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="incomes" title="Incomes">
            <Card>
              <CardBody className={"flex items-center  gap-2"}>
                <h2 className="text-xl font-semibold">Total</h2>
                <p>$ {totalIncomes}</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="expenses" title="Expenses">
            <Card>
              <CardBody className={"flex items-center  gap-2"}>
                <h2 className="text-xl font-semibold">Total</h2>
                <p>$ {totalExpenses}</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="reviews" title="Review">
            <Card>
              <CardBody className={"flex items-center  gap-2"}>
                <h2 className="text-xl font-semibold">Review</h2>
                {!oneReview[0] ? (
                  <span className="text-xl font-semibold">
                    User has no review
                  </span>
                ) : (
                  <>
                    <motion.button>
                      <HiTrash onClick={handleDelete} className="text-2xl " />
                    </motion.button>
                    <StarRating stars={oneReview[0]?.rating} />
                    <p>{oneReview[0]?.content}</p>
                  </>
                )}
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div
        className={
          "flex flex-col items-center shadow-lg p-4 rounded-xl shadow-2xl h-[152px]"
        }
      >
        <div className={"flex flex-col items-center"}>
          <p className="text-lg text-[#12A150] ">Account created at</p>
          <p className={"text-lg font-semibold"}>
            {new Date(user.createdAt).toLocaleString()} HS
          </p>
        </div>
        {user.deletedAt !== null ? (
          <div className={"flex flex-col items-center"}>
            <p className="text-lg text-[#f31260]">Account banned at</p>
            <p className={"text-lg font-semibold"}>
              {new Date(user.deletedAt).toLocaleString()} HS
            </p>
          </div>
        ) : (
          <p className="mt-4 font-semibold text-lowGray">
            This account has not been banned
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionDetail;
