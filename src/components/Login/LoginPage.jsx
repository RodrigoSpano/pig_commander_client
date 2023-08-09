'use client';
import SideRight from "../SideRight/SideRight";
import Link from "next/link";
import useLogin from "@/customHooks/useLogin";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useVisibility from "@/customHooks/useVisibility";

export default function LoginContainer() {
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

    const {showPassword, togglePasswordVisibility} = useVisibility(); 

    return (
        <form onSubmit={handleSubmit} className="flex flex-row h-screen bg-white select-none">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">LOGIN</h1>
                
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                
                <div className="flex flex-col text-center items-center">
                    <input className="bg-inputForm font-light w-2/4 p-1.5 px-4 rounded-lg mb-3 text-sm focus:outline-none active:outline-none" type="mail" name="email" value={userLogin.email} placeholder='Email...' autoComplete="off" onChange={handleChange} onFocus={allowEmailErrorMessage} />
                    <p className="text-red-400 relative bottom-2.5 text-xs">{(inputInvalidEmail && focusedEmailInput) ? ("Email invalid") : ("")}</p>

                    <div className="flex justify-between items-center px-4 bg-inputForm font-light w-2/4 p-1.5 rounded-lg text-sm focus:outline-none active:outline-none" >
                        <input className='outline-none border-none bg-transparent w-full'  type={showPassword ? "text" : "password"} name="password" value={userLogin.password} placeholder="Password..." autoComplete="off" onChange={handleChange} min="8" required onFocus={allowPasswordErrorMessage} />

                        <span
                            className="flex items-center cursor-pointer ml-2 focus:outline-none text-gray-500 text-2xl"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </div>

                    <p className="text-red-400 relative top-0.5 text-xs text-center w-80">{(inputInvalidPassword && focusedPasswordInput) ? ("This field is required") : ("")}</p>
                </div>
                
                <button className={` text-white p-3.5 font-bold cursor-pointer rounded-2xl pl-5 pr-5 mt-8 text-base disabled:cursor-no-drop ${someFieldEmpty ? "bg-buttonDisabled" : "bg-gradient-to-r from-regularPink to-boldPink"}`} disabled={someFieldEmpty} type="submit">
                    Login Now
                </button>
                
                <h3 className="text-gray-500 mt-5 cursor-pointer">Don't have an account?</h3>
                
                <Link href="/signup">
                    <h4 className="text-regularPink font-medium">Register</h4>
                </Link>
                
                <h4 className="text-gray-500 mt-5">or</h4>
                
                <div onClick={() => {window.location.href="http://localhost:8080/api/auth/google"}} className="flex justify-center">
                    <div className="flex justify-center w-60 rounded-2xl p-2 bg-white mt-2 drop-shadow-xl">
                        <div className="self-center"><FcGoogle /></div>
                        <h2  className="m-1.5 font-semibold text-google cursor-pointer">Continue with Google</h2>
                    </div>
                </div>
            </div>
            <SideRight />
        </form>
    )
}; 