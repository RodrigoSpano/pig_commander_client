import React from "react";
import { becomePremiumHandler } from "./becomePremiumHandler";
import { useSelector } from "react-redux";

export default function ProfileComponent({ user }) {
  //* Variable auxiliar, se la paso a la funcion por params
  let token;

  //* Selecciono el estado global de usuario

  // * Condicional para buscar el token
  if (typeof localStorage !== "undefined") {
    token = localStorage.getItem("token");
  }

  // * Condicional para que renderize segun si es premium o no
  return (
    <div>
      {/* El que le de estilos y su usario no tiene premium y no tiene configurado el back de mercado pago,
       puede negar el user.premium y va a ver el PRO en pantalla, sacar este comentario y el ! de negacion al terminar */}
      {user.premium ? (
        <p>PRO</p>
      ) : (
        <button onClick={() => becomePremiumHandler(token)}>
          Become Premium
        </button>
      )}
    </div>
  );
}
