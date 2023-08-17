import {
  getAllUsersCount,
  getBannedUsers,
  getBasicUsers,
  getProUsers,
} from "@/redux/actions/adminActions";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

const UsersCards = () => {
  const [cookies, setCookie] = useCookies();

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllUsersCount(cookies.token));
    dispatch(getBasicUsers(cookies.token));
    dispatch(getBannedUsers(cookies.token));
    dispatch(getProUsers(cookies.token));
  }, [dispatch]);

  const cardStyles = "px-8 py-10 bg-white rounded-lg shadow-md text-center";

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className={cardStyles}>
        <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
          Total Users
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">
          {admin.allUsers}
        </h1>
      </div>

      <div className={cardStyles}>
        <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
          Basic Users
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">
          {admin.basicUsers}
        </h1>
      </div>

      <div className={cardStyles}>
        <h2 className="flex justify-center font-semibold text-2xl text-neutral-800 mb-4 gap-1">
          <span className="text-regularPink">Pro</span>
          <span>Users</span>
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">
          {admin.proUsers}
        </h1>
      </div>

      <div className={cardStyles}>
        <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
          Banned Users
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">
          {admin.bannedUsers}
        </h1>
      </div>
    </div>
  );
};

export default UsersCards;
