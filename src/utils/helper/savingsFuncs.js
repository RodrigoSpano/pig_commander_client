import { weldDates } from "./inversionsFuncs";

//form saving control = false significa problemas, form saving control = true significa que paso las verificaciones de seguridad; puede o no devolver un mensaje de error
export const formControlSavings = (values) => {
    let controlObjet = {
        errorMessages: "",
        booleanMessage: true,
      };

      const regex = /^[a-zA-Z\s]*$/; // Expresión regular para letras y espacios

      if (values.name.length < 20) {
        controlObjet.booleanMessage = false;
        controlObjet.errorMessages =
          "Saving Name must be 20 characters long or less";
      }
      if (regex.test(values.name)) {
        controlObjet.booleanMessage = true;
      } else {
        controlObjet.booleanMessage = false;
        controlObjet.errorMessages =
          "Saving Name should not have any special characters";
      }
      if(parseFloat(values.amount) > parseFloat(values.goal)) {
        controlObjet.booleanMessage = false;
        controlObjet.errorMessages = "The goal have to be greater than the start amount"
      }

      return controlObjet;
}
