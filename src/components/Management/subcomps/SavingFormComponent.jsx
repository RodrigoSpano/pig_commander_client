import React, { useState } from "react";
import Inputs from "./subcomps_forms/imputs";
import { weldDates } from "@/utils/helper/inversionsFuncs";
import { postConversion, formControlSavings} from "@/utils/helper/savingsFuncs"
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { createSaving } from "@/redux/actions/savingsActions";

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
    console.log(values)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formControl = formControlSavings(values);

    if (!formControl.booleanMessage) {
      alert(formControl.errorMessages);
    } else {
      if (cookies.token) {
        let data = {
          name: values.name,
          amount: parseFloat(values.amount),
          goal: parseFloat(values.goal),
      }
        const { token } = cookies;
        dispatch( createSaving({token, ...data}) );
      }
    }
  };

  return (
    <div>
      <div className="mt-5 ml-2 text-3xl sm:text-xl font-extrabold tracking-tight text-boldPink">
        Create New Goal:
      </div>
      <div className="grid grid-cols-1 gap-2 w-full h-full">
        <form>
          <div className="col-span-1">
            <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
              Name
            </div>

            <input
              className="ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 sm:w-2/5 w-full"
              placeholder="Enter Name"
              id="name"
              name="name"
              onChange={handleChange}
              required
            ></input>

            <div className="w-5/12 sm:w-full">
              <Inputs
                title={"Daily Savings"}
                icon={"$"}
                id={"amount"}
                handleChange={handleChange}
              />
            </div>

            <div className="w-5/12 sm:w-full">
              <Inputs
              title={"Goal Amount"}
                icon={"$"}
                id={"goal"}
                handleChange={handleChange}
              />
            </div>
            
            <button
              className="mt-4 text-lg bg-gradient-to-r from-regularPink to-boldPink text-white rounded-sm px-5 py-2 mx-2 font-extrabold tracking-widest"
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
