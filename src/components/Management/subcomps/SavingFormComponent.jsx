import React, { useState } from "react";
import Inputs from "./subcomps_forms/imputs";
import { weldDates } from "@/utils/helper/inversionsFuncs";
import {
  postConversion,
  formControlSavings,
} from "@/utils/helper/savingsFuncs";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { createSaving } from "@/redux/actions/savingsActions";
import Swal from "sweetalert2";

export default function SavingFormComponent() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();

  const today = new Date();
  const todayFormatted = weldDates(today);

  const [values, setValues] = useState({
    name: "",
    amount: "",
    goal: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formControl = formControlSavings(values);

    if (!formControl.booleanMessage) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: formControl.errorMessages,
        confirmButtonColor: "#ED4998",
      });
    } else {
      if (cookies.token) {
        let data = {
          name: values.name,
          amount: parseFloat(values.amount),
          goal: parseFloat(values.goal),
        };
        const { token } = cookies;
        dispatch(createSaving({ token, ...data }));

        setValues({
          name: "",
          amount: "",
          goal: "",
        });
      }
    }
  };

  return (
    <div>
      <div className="mt-2 mb-4 ml-2 text-3xl sm:text-xl font-extrabold tracking-tight dark:text-mediumPinkDark text-boldPink">
        Create New Goal
      </div>
      <div className="grid grid-cols-1 gap-2 w-full h-auto">
        <form>
          <div className="col-span-1">
            <div className="text-center ml-2 mt-2 text-black dark:text-white text-opacity-50 text-lg font-normal">
              Name
            </div>
            <div className="flex items-center justify-center">
              <input
                className="ml-2 pl-2 mb-4 text-gray-500 dark:text-white bg-black bg-opacity-10 rounded-sm h-12 sm:w-2/5 w-full"
                placeholder="Enter Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="flex w-full mb-4">
              <Inputs
                title={"Set a starting amount"}
                icon={"$"}
                values={values.amount} //prop
                id={"amount"}
                handleChange={handleChange}
              />
              <Inputs
                title={"Set a goal amount"}
                icon={"$"}
                id={"goal"}
                values={values.goal} //prop
                handleChange={handleChange}
              />
            </div>

            <button
             className="text-md mt-4 ml-2 w-36 font-extrabold bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300 tracking-widest"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
