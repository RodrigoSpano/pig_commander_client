import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import axios from "axios";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import {
  filterCreatedCategory,
  pushCreatedCategory,
  deleteCreatedCategory,
} from "@/redux/features/otherInfoSlice";
import { useDispatch } from "react-redux";

export default function useCreateCategory() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  const [error, setError] = useState("Write the name of the category");
  const [nameCategory, setNameCategory] = useState({
    name: "",
  });

  //FUNCION PARA CONTROLAR LOS ERRORES Y ACTUALIZAR EL ESTADO
  const handleError = (event) => {
    //ERRORS INPUT NAME
    if (!/^.{4,}$/.test(event.target.value)) setError("Minimum 4 characters"); // VERIFICA QUE SEA MAYOR A 4 CARACTERES
    if (/^.{4,12}$/.test(event.target.value)) setError(<BsCheck2Circle />); // SI VA TODO BIEN
    if (!/^.{0,12}$/.test(event.target.value))
      setError("Maximum 12 characters"); // CUANDO SUPERA EL MAXIMO DE 12 CARACTERES
    if (!/^[A-Za-z]+$/.test(event.target.value))
      setError("Only letters (no special characters or numbers)");
    if (/^$/.test(event.target.value))
      setError("Write the name of the category"); // PARA QUE ESCRIBA EN EL INPUT
  };

  //CONTROLO EL VALUE DEL NAME PARA EL MANEJO DE ERRORES Y PODER ENVIAR EL VALOR AL BACK
  const handleValueName = (event) => {
    setNameCategory({ ...nameCategory, name: event.target.value });
    handleError(event);
  };

  const handleCreateCategory = async () => {
    try {
      const { data } = await axios.post("/category", nameCategory, {
        headers: { Authorization: cookies.token },
      });

      if (data.name) {
        dispatch(pushCreatedCategory(data));
        dispatch(filterCreatedCategory());
        setNameCategory("");
        setError("Write the name of the category");
        Swal.fire({
          title: "Success!",
          text: "Category created successfully!",
          icon: "success",
          confirmButtonColor: "#de78ae",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.error,
        icon: "error",
        confirmButtonColor: "#de78ae",
      });
    }
  };

  const handleDeleteCategory = async (id, token) => {
    try {
      const { data } = await axios.delete(`/category/${id}`,{
        headers: { Authorization: token },
      });

      if (data) {
        dispatch(deleteCreatedCategory(id));
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.error,
        icon: "error",
        confirmButtonColor: "#de78ae",
      });
    }
  };

  return { error, nameCategory, handleValueName, handleCreateCategory, handleDeleteCategory };
}
