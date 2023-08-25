import { updateSaving } from "@/redux/actions/savingsActions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { controlMaxAmount, formControlDona } from "@/utils/helper/savingsFuncs";
import Swal from "sweetalert2";


export default function AddSavForm({ id, index }) {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  const [amount, setAmount] = useState("");
  const [disabledInputs, setDisableInput] = useState(false)
  const savings = useSelector((state) => state.savings.allSavings);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formControl = formControlDona(amount);

    if (!formControl.booleanMessage) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: formControl.errorMessages,
        confirmButtonColor: "#ED4998",
      });
    } else {
      const maxAmount = controlMaxAmount(
        parseFloat(amount),
        parseFloat(savings[index].amount),
        parseFloat(savings[index].goal)
      );

      if (maxAmount.booleanMessage) {
        if (cookies.token) {
          const { token } = cookies;
          const newAmount = parseFloat(maxAmount.sendedAmount);
          const data = {
            token: token,
            id: id,
            amount: newAmount,
          };

          dispatch(updateSaving(data));

          Swal.fire({
            icon: "success",
            text: maxAmount.controlMessage,
            showConfirmButton: false,
            timer: 1500,
          });

          setAmount("");
        }
      } else {
        if (cookies.token) {
          const { token } = cookies;
          const newAmount =
            parseFloat(amount) + parseFloat(savings[index].amount);
          const data = {
            token: token,
            id: id,
            amount: newAmount,
          };

          dispatch(updateSaving(data));
          setAmount("");
        }
      }
    }
  };

  useEffect(() => {
    if(savings[index] && savings[index].amount === savings[index].goal){
      setDisableInput(true)
    } else { setDisableInput(false)}
  },[index, id])

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-center">
        <input
          className={`w-36 ${disabledInputs ? 'cursor-not-allowed' : ''} flex border-1 ml-2 pl-2  text-gray-500 dark:border-0 bg-black bg-opacity-10 rounded-lg h-12 w-2/3 justify-center items-center text-sm`}
          title="Enter amount"
          value={amount}
          onChange={handleChange}
          placeholder="Enter an Amount ..."
          disabled={disabledInputs}
          required
        ></input>
        <button
         className={`text-sm w-36 font-extrabold ml-2 ${disabledInputs ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-400 to-pink-600'} text-white  rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300 tracking-widest`}
          type="submit"
          disabled={disabledInputs}
        >
          Add Founds
        </button>
      </div>
    </form>
  );
}
