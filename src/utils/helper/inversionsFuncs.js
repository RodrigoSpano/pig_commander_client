//convierte los datos ingresados del form de inversiones en una grafica
export const earnedUpToDate = (finalDate, initialDate, interest, amount) => {
  const interestDecimal = interest / 100;
  const totalTime = (finalDate - initialDate) / (1000 * 3600 * 24);

  let sumInterest = 0;
  let actualDate = initialDate;

  const chartData = [];

  while (actualDate <= finalDate) {
    const timeDay = (actualDate - initialDate) / (1000 * 3600 * 24);
    let dayInterest = 0;

    if (timeDay > 0) {
      dayInterest = (amount + sumInterest) * interestDecimal;
      sumInterest += dayInterest;
    } else {
      dayInterest = amount;
    }

    const dayNumber = Math.floor(timeDay) + 1; // Day number starting from 1
    chartData.push({
      day: parseInt(dayNumber),
      total: parseFloat((amount + sumInterest).toFixed(2)),
      amount: parseFloat(amount.toFixed(2)),
    });

    actualDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000); // Avanza un día
  }

  return chartData;
};
//form inversion control = false significa problemas, form inversion control = true significa que paso las verificaciones de seguridad; puede o no devolver un mensaje de error
export const formInversionsControl = (values) => {
  let controlObjet = {
    errorMessages: "",
    booleanMessage: true,
  };
  const regex = /^[a-zA-Z\s]*$/; // Expresión regular para letras y espacios
  const expNum = /^[0-9]+(\.[0-9]*)?$/; //Solo permite float
  const exp = /^[0-9]*$/; //Expresion solo numeros

  if (!regex.test(values.name)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "Inversion Name should not have any special characters";
  } else if (values.name.length > 10) {
    console.log("entranding");
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "Inversion Name must be 20 characters long or less";
  } else if (!expNum.test(values.amount)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages = "The amount cannot have letters or simbols";
  } else if (!exp.text(values.dayPariod)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "You cannot make a float day, has to be integer";
  } else if (values.dayPeriod > 365 && values.period === "days") {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "You should select a bigger period or less quantity";
  } else if (values.dayPeriod > 12 && values.period === "months") {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "You should select a bigger period or less quantity";
  } else if (values.dayPeriod > 10 && values.period === "years") {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "You should select a smaller amount of time for your inversion";
  } else if (!expNum.test(values.interest)) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages =
      "The interest cannot have letters or characters ";
  } else if (values.interest > 50) {
    controlObjet.booleanMessage = false;
    controlObjet.errorMessages = "Select a lower interest";
  }

  return controlObjet;
};

//convierte la informacion recopilada en el estado a el tipo que pide la base de datos
export const postConversion = (values) => {
  let data = {
    name: values.name,
    started_on: "",
    finish_at: "",
    amount: parseFloat(values.amount),
    earning: "",
  };
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-11 (enero-diciembre)
  const day = today.getDate();

  data.started_on = new Date(year, month, day);

  if (values.period === "years") {
    data.finish_at = new Date(year + parseInt(values.dayPeriod), month, day);
  } else if (values.period === "months") {
    data.finish_at = new Date(year, month + parseInt(values.dayPeriod), day);
  } else if (values.period === "days") {
    data.finish_at = new Date(year, month, day + parseInt(values.dayPeriod));
  }
  (data.earning = parseFloat(values.interest)),
    (data.started_on = weldDates(data.started_on));
  data.finish_at = weldDates(data.finish_at);

  return data;
};

//Obtener earning
export const getEarnings = (
  initialDate,
  finalDate,
  interest,
  amount,
  taxes
) => {
  const daysInYear = 365;
  const interestRate = interest / 100;

  const timeDifference = (finalDate - initialDate) / (1000 * 60 * 60 * 24);
  const years = timeDifference / daysInYear;

  // Fórmula del interés compuesto
  const compoundAmount = amount * Math.pow(1 + interestRate, years);

  let earnings = 0;
  if (parseInt(taxes)) {
    earnings = (compoundAmount - amount) * (1 - taxes / 100);
  } else {
    earnings = compoundAmount - amount;
  }
  return earnings.toFixed(2); // Devolver ganancias redondeadas a 2 decimales
};

//pone las fechas en string (vienen como objeto)
export const weldDates = (date) => {
  const finishYear = date.getFullYear();
  const finishMonth = date.getMonth() + 1;
  const finishDay = date.getDate();

  const formattedMonth = finishMonth < 10 ? `0${finishMonth}` : finishMonth;
  const formattedDay = finishDay < 10 ? `0${finishDay}` : finishDay;

  const formattedDate = `${finishYear}-${formattedMonth}-${formattedDay}`; /* ("YYYY-MM-DD"); */
  return formattedDate;
};

export const getDate = (date) => {
  let data = new Date(date);
  return data;
};
