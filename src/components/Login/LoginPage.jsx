"use client";
import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { motion } from "framer-motion";
import SideRight from "../SideRight/SideRight";
import useLogin from "@/customHooks/useLogin";
import useVisibility from "@/customHooks/useVisibility";
import BackButton from "../CustomButtons/BackButton";
import { HiEnvelope, HiMiniLockClosed } from "react-icons/hi2";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginContainer = () => {
  const {
    userLogin,
    handleSubmit,
    inputInvalidPassword,
    handleChange,
    inputInvalidEmail,
    someFieldEmpty,
    focusedEmailInput,
    focusedPasswordInput,
    allowEmailErrorMessage,
    allowPasswordErrorMessage,
  } = useLogin();

  const { showPassword, togglePasswordVisibility } = useVisibility();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row bg-white dark:bg-strongGray select-none"
    >
      <BackButton />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full sm:w-2/4 self-center text-center"
      >
        <h1 className="font-bold text-black dark:text-mediumPinkDark text-2xl">
          LOGIN
        </h1>

        <h2 className="text-gray-500 mb-5 dark:text-white ">
          Pig Commander is the most secure finance App.
        </h2>

        <div className="flex flex-col text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-2/4 mb-3 flex items-center bg-inputForm font-light rounded-lg text-sm"
          >
            <HiEnvelope className="text-gray-500 w-7 h-7 text-lg ml-4" />
            <input
              className="dark:text-black bg-transparent py-4 focus:outline-none active:outline-none w-full ml-2"
              type="email"
              name="email"
              value={userLogin.email}
              placeholder="Email..."
              autoComplete="off"
              onChange={handleChange}
              onFocus={allowEmailErrorMessage}
            />
          </motion.div>
          <p className="text-red-400 relative bottom-2.5 text-xs">
            {inputInvalidEmail && focusedEmailInput ? "Email invalid" : ""}
          </p>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-2/4 mb-3 flex items-center bg-inputForm font-light rounded-lg text-sm"
          >
            <HiMiniLockClosed className="text-gray-500 w-7 h-7 text-lg ml-4" />
            <input
              className="dark:text-black bg-transparent py-4 focus:outline-none active:outline-none w-full ml-2"
              type={showPassword ? "text" : "password"}
              name="password"
              value={userLogin.password}
              placeholder="Password..."
              autoComplete="off"
              onChange={handleChange}
              min="8"
              required
              onFocus={allowPasswordErrorMessage}
            />
            <span
              className="absolute right-3 cursor-pointer focus:outline-none text-gray-500 text-2xl"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </motion.div>
          <p className="text-red-400 relative top-0.5 text-xs text-center w-80">
            {inputInvalidPassword && focusedPasswordInput
              ? "This field is required"
              : ""}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-white p-3.5 font-bold cursor-pointer rounded-2xl pl-5 pr-5 mt-8 text-base disabled:cursor-no-drop ${
            someFieldEmpty
              ? "bg-buttonDisabled"
              : "bg-gradient-to-r from-regularPink to-boldPink"
          }`}
          disabled={someFieldEmpty}
          type="submit"
        >
          Login Now
        </motion.button>

        <h3 className="text-gray-500 mt-5 cursor-pointer dark:text-white ">
          Don't have an account?
        </h3>

        <Link href="/signup">
          <motion.h4
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-regularPink font-medium"
          >
            Register
          </motion.h4>
        </Link>

        <h4 className="text-gray-500 mt-5 dark:text-white ">or</h4>

        <div
          onClick={() => {
            window.location.href = `${process.env.NEXT_PUBLIC_API_URI}/auth/google`;
          }}
          className="flex justify-center mt-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center w-60 sm:w-auto rounded-2xl p-2 bg-white drop-shadow-xl"
          >
            <div className="self-center">
              <FcGoogle />
            </div>
            <h2 className="m-1.5 font-semibold text-google cursor-pointer">
              Continue with Google
            </h2>
          </motion.div>
        </div>
        <div
          onClick={() => {
            window.location.href = `${process.env.NEXT_PUBLIC_API_URI}/auth/github`;
          }}
          className="flex justify-center mt-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center w-60 sm:w-auto rounded-2xl p-2 bg-white drop-shadow-xl"
          >
            <div className="self-center text-black dark:text-black">
              <VscGithubInverted />
            </div>
            <h2 className="m-1.5 font-semibold  text-google cursor-pointer">
              Continue with Github
            </h2>
          </motion.div>
        </div>
      </motion.div>

      <SideRight />
    </form>
  );
};

export default LoginContainer;
