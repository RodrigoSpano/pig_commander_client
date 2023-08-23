import Inputs from "./subcomps_forms/imputs";
import useInvestmentForm from "@/customHooks/useInvestmentForm";

export default function InvestmentFormComponent() {

  const {handleChange,handleSubmit, values} = useInvestmentForm()

  return (
    <div>
      <div className="mt-5 ml-2 text-3xl text-boldPink font-extrabold tracking-tight sm:text-xl">
        Create New:
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-auto sm:gap-1 ">
          <div className="column-span-1">
            <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
              Name
            </div>
            <input
              className=" ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-11/12 "
              placeholder="Enter Name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              required
            ></input>
          </div>

          <Inputs
            title={"Starting Amount"}
            icon={"$"}
            id={"amount"}
            values={values.amount}
            handleChange={handleChange}
          />
          <Inputs
            title={"Saving Period"}
            icon={""}
            id={"period"}
            values={values.dayPeriod}
            handleChange={handleChange}
          />
          <Inputs
            title={"Cost Effectiveness"}
            icon={"%"}
            id={"interest"}
            values={values.interest}
            handleChange={handleChange}
          />

          <button
            className="capitalize mt-4 text-lg bg-gradient-to-r from-regularPink to-boldPink  hover:from-boldPink hover:to-regularPink text-white rounded-sm px-5 py-2 mx-2 font-extrabold tracking-widest"
            type="submit"
            value="Submit"
          >submit</button>
        </div>
      </form>
    </div>
  );
}
