import Inputs from "../subcomps_formsEs/imputsEs";
import useInvestmentForm from "@/customHooks/useInvestmentForm";

export default function InvestmentFormComponentEs() {
  //manejan el boton de yes, no del componente

  const {handleChange,handleSubmit} = useInvestmentForm()

  return (
    <div>
      <div className="mt-5 ml-2 text-3xl text-boldPink font-extrabold tracking-tight sm:text-xl">
        Crear Nuevo:
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-full sm:gap-1 ">
          <div className="column-span-1">
            <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
              Nombre
            </div>
            <input
              className=" ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-11/12 "
              placeholder="Ingresar nombre"
              name="name"
              id="name"
              onChange={handleChange}
              required
            ></input>
          </div>

          <Inputs
            title={"Monto Inical"}
            icon={"$"}
            id={"amount"}
            handleChange={handleChange}
          />
          <Inputs
            title={"Período de Ahorro"}
            icon={""}
            id={"period"}
            handleChange={handleChange}
          />
          <Inputs
            title={"Efectividad de Costo"}
            icon={"%"}
            id={"interest"}
            handleChange={handleChange}
          />

          <button
            className="capitalize mt-4 text-lg bg-gradient-to-r from-regularPink to-boldPink  hover:from-boldPink hover:to-regularPink text-white rounded-sm px-5 py-2 mx-2 font-extrabold tracking-widest"
            type="submit"
            value="Submit"
          >enviar</button>
        </div>
      </form>
    </div>
  );
}
