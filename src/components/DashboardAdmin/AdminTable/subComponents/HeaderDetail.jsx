import React from "react";

const HeaderDetail = ({ user }) => {
  return (
    <header
      className={
        "border-solid shadow-md rounded-lg flex h-[200px] items-center  p-2 justify-around"
      }
    >
      <div className={"flex flex-col items-center capitalize"}>
        <img src={user?.image} className={"rounded-lg w-[130px] h-[130px]"} />
        <p
          className={`mt-1 ${
            user.status === "active" ? "text-[#12A150]" : "text-[#f31260]"
          }`}
        >
          {user.status}
        </p>
      </div>
      <section className="grid grid-cols-2 gap-4 ">
        <div className={"border-solid border-l-4  p-2 border-lightPink"}>
          <h2 className="text-lg font-semibold">Name</h2>
          <h3>{user.name}</h3>
        </div>
        <div className={"border-solid border-l-4 border-lightPink p-2"}>
          <h2 className="text-lg font-semibold">LastName</h2>
          <h3>{user.lastname}</h3>
        </div>
        <div className={"border-solid border-l-4 p-2 border-lightPink"}>
          <h2 className="text-lg font-semibold">Email</h2>
          <a
            href={`mailto:${user.email}?subject=Pig%20Commander&body=¡Hola%20${user.name}!%0A%0AQueremos%20agradecerte%20sinceramente%20por%20usar%20nuestra%20aplicacion.%20Esperamos%20que%20estés%20disfrutando%20de%20tu%20experiencia%20hasta%20ahora.%20Tu%20opinión%20es%20importante%20para%20nosotros,%20así%20que%20si%20tienes%20alguna%20sugerencia%20o%20comentario,%20no%20dudes%20en%20compartirlo%20con%20nosotros.%0A%0A¡Gracias%20nuevamente%20por%20elegir%20nuestra%20aplicacion!`}
          >
            <h3>{user.email}</h3>
          </a>
        </div>
        <div
          className={"border-solid border-l-4 p-2 capitalize border-lightPink"}
        >
          <h2 className="text-lg font-semibold ">Plan</h2>
          <h3
            className={`font-semibold ${
              user.plan === "basic" ? "text-lowGray" : "text-strongPink"
            }`}
          >
            {user.plan}
          </h3>
        </div>
      </section>
    </header>
  );
};

export default HeaderDetail;
