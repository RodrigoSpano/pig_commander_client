import { updateSaving } from "@/redux/actions/savingsActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

export default function AddSavForm({ id, index }) {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  const [amount, setAmount] = useState("");
  const savings = useSelector((state) => state.savings.allSavings);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { token } = cookies;
    const newAmount = parseFloat(amount) + parseFloat(savings[index].amount);
    const data = {
      token: token,
      id: id,
      amount: newAmount,
    };

    dispatch(updateSaving(data));
    setAmount("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <input
          className=" flex border-1 ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-2/3 justify-center items-center"
          title="Enter amount"
          value={amount}
          onChange={handleChange}
          placeholder="Enter an Amount ..."
          required
        ></input>
        <button
          className=" text-lg bg-gradient-to-r from-regularPink to-boldPink text-white rounded-sm h-12 w-1/3 px-2 py-2 mx-1 font-extrabold tracking-widest"
          type="submit"
        >
          Add Founds
        </button>
      </div>
    </form>
  );
}
