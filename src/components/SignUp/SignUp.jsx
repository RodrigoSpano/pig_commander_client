"use client";
import React from "react";
import Link from "next/link";
import useSignup from "@/customHooks/useSignup";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import useVisibility from "@/customHooks/useVisibility";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiUser, HiEnvelope, HiMiniLockClosed } from 'react-icons/hi2';
import SideRight from "../SideRight/SideRight";
import BackButton from "../CustomButtons/BackButton";

export default function SignUpComponent() {

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };


  const {
    userSignUp,
    handleChange,
    handleSubmit,
    inputInvalidName,
    inputInvalidEmail,
    inputInvalidPassword,
    someFieldEmpty,
    focusedEmailInput,
    focusedPasswordInput,
    focusedNameInput,
    allowNameErrorMessage,
    allowEmailErrorMessage,
    allowPasswordErrorMessage,
  } = useSignup();

  const { showPassword, togglePasswordVisibility } = useVisibility();

  return (
    <div className="flex bg-white">
      <BackButton />
      <motion.div
        className="flex items-center justify-center w-2/4 h-screen bg-white select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md p-6">

          <div className='flex flex-col justify-center items-center'>
            <h1 className="font-bold text-black text-2xl">REGISTER</h1>
            <h2 className="text-gray-500">
              Pig Commander is the most secure finance App.
            </h2>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center rounded-lg bg-inputForm">
              <HiUser className="ml-2 text-2xl text-neutral-700" />
              <input
                className="ml-2 input-field bg-transparent py-4 focus:outline-none active:outline-none"
                type="text"
                value={userSignUp.name}
                name="name"
                placeholder="Name"
                autoComplete="off"
                onChange={handleChange}
                onFocus={allowNameErrorMessage}
              />
            </div>

            <div className="mb-3">
              <div className="mb-3 flex items-center rounded-lg bg-inputForm">
                <HiUser className="ml-2 text-2xl text-neutral-700" />
                <input
                  className="ml-2 input-field bg-transparent py-4 focus:outline-none active:outline-none"
                  type="text"
                  value={userSignUp.lastName}
                  name="lastName"
                  autoComplete="off"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
            </div>

            {inputInvalidName && focusedNameInput && (
              <p className="text-xs text-red-600 mb-3">
                Only letters in these fields
              </p>
            )}

            <div className="mb-3 flex items-center rounded-lg bg-inputForm">
              <HiEnvelope className="ml-2 text-2xl text-neutral-700" />
              <input
                className="ml-2 input-field bg-transparent py-4 focus:outline-none active:outline-none"
                type="email"
                value={userSignUp.email}
                placeholder="Email"
                name="email"
                autoComplete="off"
                onChange={handleChange}
                onFocus={allowEmailErrorMessage}
              />
            </div>

            {inputInvalidEmail && focusedEmailInput && (
              <p className="text-xs text-red-600 mb-3">Email invalid</p>
            )}

            {/* PASSWORD */}
            <div className="mb-3 flex items-center rounded-lg bg-inputForm">
              <HiMiniLockClosed className="ml-2 text-2xl text-neutral-700" />
              <input
                className="ml-2 input-field bg-transparent py-4 focus:outline-none active:outline-none"
                type={showPassword ? "text" : "password"}
                value={userSignUp.password}
                placeholder="Password"
                autoComplete="off"
                name="password"
                onChange={handleChange}
                onFocus={allowPasswordErrorMessage}
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>

            {inputInvalidPassword && focusedPasswordInput && (
              <p className="text-xs text-red-600 mt-1">
                This field is required. It must have at least 1 lowercase letter, 1 uppercase letter, 1 number, no spaces, and a minimum of 8 characters.
              </p>
            )}

            <section className="flex flex-col justify-center items-center">
              {/* CREATE ACCOUNT BUTTON */}
              <button
                className={`text-white p-3.5 font-bold cursor-pointer rounded-2xl pl-5 pr-5 text-base disabled:cursor-no-drop ${someFieldEmpty
                    ? "bg-buttonDisabled"
                    : "bg-gradient-to-r from-regularPink to-boldPink"
                  }`}
                disabled={someFieldEmpty}
                onClick={handleSubmit}
                whileHover="hover"
                variants={buttonVariants}
              >
                Create Account
              </button>

              {/* GOOGLE BUTTON */}
              <div
                onClick={() => {
                  window.location.href = `${process.env.NEXT_PUBLIC_API_URI}/auth/google`;
                }}
                className="flex justify-center cursor-pointer mt-4"
              >
                <div className="flex items-center justify-center w-60 rounded-2xl p-2 bg-white drop-shadow-xl">
                  <div className="self-center">
                    <FcGoogle size={24} />
                  </div>
                  <h2 className="ml-2 font-semibold text-pink-500">
                    Continue with Google
                  </h2>
                </div>
              </div>

              {/* MESSAGE BUTTON */}
              <p className="text-gray-600 mt-4">
                Already have an account?{" "}
                <Link href="/login">
                  <span className="text-pink-500 cursor-pointer">Login</span>
                </Link>
              </p>
            </section>

          </div>
        </div>
      </motion.div>
      <SideRight />
    </div>
  );
}
