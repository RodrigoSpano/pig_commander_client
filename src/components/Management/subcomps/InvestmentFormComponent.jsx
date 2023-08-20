import React, { useState } from "react";
import Inputs from "./subcomps_forms/imputs";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import {
  formInversionsControl,
  postConversion,
} from "@/utils/helper/inversionsFuncs";
import { createInversion } from "@/redux/actions/inversionsActions";

export default function InvestmentFormComponent() {
  //manejan el boton de yes, no del componente
  const [disableInput, setDisableInput] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();

  const handleYesClick = () => {
    handleButtonClick(false);
    handleButtonClick2("Yes");
    setDisableInput(false); // Habilitar el campo de impuestos
  };

  const handleNoClick = () => {
    handleButtonClick(true);
    handleButtonClick2("No");
    setDisableInput(true); // Deshabilitar el campo de impuestos
  };

  const handleButtonClick2 = (button) => {
    setSelectedButton(button);
  };

  const handleButtonClick = (disable) => {
    setDisableInput(disable);
  };

  //valores del form
  const [values, setValues] = useState({
    name: "",
    amount: "",
    dayPeriod: "",
    period: "days",
    interest: "",
    taxes: "",
    earning: "", //guarda el interest en realidad, ya que no esta hecha la variable en la bd
  });
  //setea los valores del form a medida que cambian los componentes del form
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //llama a funcion que controla la estructura de los datos y devuelve un objeto con mensaje de error y un valor true o false en funcion del control
    const formControl = formInversionsControl(values);

    if (!formControl.booleanMessage) {
      alert(formControl.errorMessages);
    } else {
      //postConversion setea los datos al formato requerido por la bd
      if (cookies.token) {
        const data = postConversion(values)
        const {token} = cookies;
        dispatch( createInversion({token, ...data}) );
      }
    }
  };

  return (
    <div>
      <div className="mt-5 ml-2 text-3xl text-boldPink font-extrabold tracking-tight sm:text-xl">
        Create New:
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-full sm:gap-1 ">
          <div className="column-span-1">
            <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
              Name
            </div>
            <input
              className=" ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-11/12 "
              placeholder="Enter Name"
              name="name"
              id="name"
              onChange={handleChange}
              required
            ></input>
          </div>

          <Inputs
            title={"Starting Amount"}
            icon={"$"}
            id={"amount"}
            handleChange={handleChange}
          />
          <Inputs
            title={"Saving Period"}
            icon={""}
            id={"period"}
            handleChange={handleChange}
          />
          <Inputs
            title={"Cost Effectiveness"}
            icon={"%"}
            id={"interest"}
            handleChange={handleChange}
          />

          <div className="col-span-2 ml-2 text-black text-opacity-50 text-lg font-normal">
            Taxes
          </div>
          <div className="column-span-1 flex flex-row">
            <button
              className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
                selectedButton === "Yes"
                  ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
                  : "hover:bg-opacity-20 hover:cursor-pointer"
              }`}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
                selectedButton === "No"
                  ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
                  : "hover:bg-opacity-20 hover:cursor-pointer"
              }`}
              onClick={handleNoClick}
            >
              No
            </button>
          </div>
          <div className="column-span-1 relative">
            <div className="flex flex-row">
              <input
                className=" ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12  w-11/12  pr-10"
                placeholder="Enter Taxes"
                name="taxes"
                disabled={disableInput}
                onChange={handleChange}
                required
              ></input>
              <span className="mt-4 font-extrabold text-lg absolute inset-y-0 right-4 -top-1 ">
                %
              </span>
            </div>
          </div>
          <input
            className=" mt-4 text-lg bg-gradient-to-r from-regularPink to-boldPink  hover:from-boldPink hover:to-regularPink text-white rounded-sm px-5 py-2 mx-2 font-extrabold tracking-widest"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </div>
  );
}
