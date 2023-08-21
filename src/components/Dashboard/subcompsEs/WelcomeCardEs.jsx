import React from "react";

const WelcomeCardEs = ({ user }) => {
  return (
    <div className="m-2 box-border">
      <div className="break-all">
        <div className="font-semibold text-2xl xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">
          Bienvenido de nuevo,
        </div>
        <div className="font-semibold text-2xl xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">
          {user.name.replace(/^\w/, (c) => c.toUpperCase())}
        </div>
        <div className="text-gray-600 mt-2 xl:text-xl lg:text-base md:text-sm sm:text-xs">
          Pig Commander es la aplicación financiera más segura{" "}
        </div>
      </div>
    </div>
  );
};

export default WelcomeCardEs;
