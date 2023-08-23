//form saving control = false significa problemas, form saving control = true significa que paso las verificaciones de seguridad; puede o no devolver un mensaje de error
export const formControlSavings = (values) => {
  let controlObjet = {
    errorMessages: "",
    booleanMessage: true,
  };

  const regex = /^[a-zA-Z\s]*$/; // Expresión regular para letras y espacios
  const expNum = /^[0-9]+(\.[0-9]*)?$/; //Solo permite float

  if (values.name.length < 20) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "Saving Name must be 20 characters long or less";
  } else if (!regex.test(values.name)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "Saving Name should not have any special characters";
  } else if (!expNum.test(values.amount)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "The amount cannot have any character or special characters";
  } else if (!expNum.test(values.goal)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "The goal cannot have any characters or special characters";
  } else if (parseFloat(values.amount) > parseFloat(values.goal)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "The goal have to be greater than the start amount";
  }

  return controlObjet;
};

export const formControlDona = (amount) => {
  let controlObjet = {
    errorMessages: "",
    booleanMessage: true,
  };
  const expNum = /^[0-9]+(\.[0-9]*)?$/; //Solo permite float
  if (!expNum.test(amount)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "The amount cannot have any character or special characters";
  }
  return controlObjet;
};

export const controlMaxAmount = (amount, prevAmount, goal) => {
  let controlObjetDona = {
    booleanMessage: false,
    sendedAmount: 0,
    controlMessage: ""
  }
  const newAmount = amount + prevAmount;
  if(newAmount >= goal) {
    controlObjetDona.booleanMessage= true;
    const dif = goal - prevAmount;
    controlObjetDona.sendedAmount = goal;
    controlObjetDona.controlMessage = 
    `Congrats for completing your goal! The amount sended was: $ ${dif}`
  }

  return controlObjetDona;
}