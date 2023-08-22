import { createInversion } from '@/redux/actions/inversionsActions';
import { formInversionsControl, postConversion } from '@/utils/helper/inversionsFuncs';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

function useInvestmentForm() {
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

  return {handleYesClick, handleChange, handleNoClick, handleButtonClick, handleButtonClick2, values, handleSubmit, selectedButton, disableInput}
}

export default useInvestmentForm