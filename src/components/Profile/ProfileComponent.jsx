'use client'
import React from "react";
import { becomePremiumHandler } from "./becomePremiumHandler";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

export default function ProfileComponent() {
  const [cookies, setCookie] = useCookies();

  //* Selecciono el estado global de usuario
  const user = useSelector((state) => state.user);

  // * Condicional para que renderize segun si es premium o no
  return (
    <div>
      {/* El que le de estilos y su usario no tiene premium y no tiene configurado el back de mercado pago,
       puede negar el user.premium y va a ver el PRO en pantalla, sacar este comentario y el ! de negacion al terminar */}
      {user.premium ? (
        <p>PRO</p>
      ) : (
        <button onClick={() => becomePremiumHandler(cookies.token)}>
          Become Premium
        </button>
      )}
    </div>
  );
}
