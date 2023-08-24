"use client";
import React from "react";
import NavBar from "../NavBar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tooltip, Button } from "@nextui-org/react";
import { HiSparkles } from "react-icons/hi2";
import ReviewList from "./ReviewList";
import Footer from "../Footer";

const ReviewPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const buttonVariants = {
    initial: { scale: 0.8 },
    hover: { scale: 1 },
  };

  return (
    <motion.div
      className="bg-lightGray dark:bg-strongGray "
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <NavBar />
      <section className="flex flex-col justify-center items-center select-none mt-20">
        <section>
          <h1 className="text-5xl md:text-7xl text-neutral-800 dark:text-white font-poppinsBold">
            User Reviews
          </h1>
        </section>

        <div className="my-10">
          <Tooltip content="Login required" className="">
            <Link href="/home/dashboard">
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button className="bg-gradient-to-r from-regularPink to-boldPink text-white">
                  <span>
                    <HiSparkles />
                  </span>
                  Add Review
                </Button>
              </motion.div>
            </Link>
          </Tooltip>
        </div>

        <section className="flex flex-col items-center justify-center my-16">
          <h3 className="text-2xl md:text-3xl mb-6 font-poppinsRegular">
            Last User Reviews
          </h3>
          <ReviewList />
        </section>
      </section>
      <Footer />
    </motion.div>
  );
};

export default ReviewPage;
