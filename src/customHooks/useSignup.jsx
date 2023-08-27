import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function () {
  const router = useRouter();
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [focusedEmailInput, setFocusedEmailInput] = useState(false);
  const [focusedPasswordInput, setFocusedPasswordInput] = useState(false);
  const [focusedNameInput, setFocusedNameInput] = useState(false);
  const [focusedConfirmPasswordInput, setFocusedConfirmPasswordInput] =
    useState(false);

  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const handleChange = (e) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordConfirmationChange = (e) =>
    setPasswordConfirmation(e.target.value);

  useEffect(() => {
    if (userSignUp.password && passwordConfirmation) {
      setPasswordsMatch(userSignUp.password === passwordConfirmation);
    }
  }, [userSignUp.password, passwordConfirmation]);

  const signupRequest = async () => {
    try {
      const user = {
        name: userSignUp.name,
        lastname: userSignUp.lastName,
        password: userSignUp.password,
        email: userSignUp.email,
        confirmPassword: userSignUp.confirmPassword,
      };
      const { data } = await axios.post("/auth/signup", user);
      if (data?.success) {
        Swal.fire({
          icon: "success",
          title: "Account created successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
        router.push("/login");
      } else {
        throw Error("hubo un error al crear tu cuenta");
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: error.response.data.error.replace(/^\w/, (c) =>
            c.toUpperCase()
          ),
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: error.message,
          text: "Try again later!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    userSignUp.email
  );

  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(
    userSignUp.password
  );

  const isName = userSignUp.name.length > 1;

  const isLastName = userSignUp.lastName.length > 1;

  // mandar siemre y cuando ningun espacio este vacio
  const handleSubmit = (event) => {
    //para que no salte de pagina
    event.preventDefault();
    signupRequest();
  };

  //validaciones de input
  const inputInvalidName = !isName || !isLastName;
  const inputInvalidEmail = !isEmail;
  const inputInvalidPassword = !isPassword;

  //boton disable
  const someFieldEmpty =
    !isEmail || !isPassword || !isName || !isLastName || !passwordsMatch;

  //focus del inmput con error
  const allowNameErrorMessage = () => {
    setFocusedNameInput(true);
  };

  const allowEmailErrorMessage = () => {
    setFocusedEmailInput(true);
  };

  const allowPasswordErrorMessage = () => {
    setFocusedPasswordInput(true);
  };

  const allowConfirmPasswordErrorMessage = () => {
    setFocusedConfirmPasswordInput(true);
  };

  return {
    userSignUp,
    handleChange,
    handleSubmit,
    inputInvalidName,
    inputInvalidEmail,
    inputInvalidPassword,
    someFieldEmpty,
    focusedEmailInput,
    focusedPasswordInput,
    focusedNameInput,
    focusedConfirmPasswordInput,
    allowNameErrorMessage,
    allowEmailErrorMessage,
    allowPasswordErrorMessage,
    allowConfirmPasswordErrorMessage,
    handlePasswordConfirmationChange,
    passwordsMatch,
    passwordConfirmation,
  };
}
