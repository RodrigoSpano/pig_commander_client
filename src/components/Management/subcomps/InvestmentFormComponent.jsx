import Inputs from "./subcomps_forms/imputs";
import useInvestmentForm from "@/customHooks/useInvestmentForm";

export default function InvestmentFormComponent() {

  const {handleChange,handleSubmit, values} = useInvestmentForm()

  return (
    <div>
      <div className="mt-2 mb-4 ml-2 text-3xl text-boldPink dark:text-mediumPinkDark font-extrabold tracking-tight sm:text-xl">
        Create New
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-auto sm:gap-1 ">
          <div className="column-span-1">
            <div className="ml-2 mt-2 text-black dark:text-white text-opacity-50 text-lg font-normal">
              Name
            </div>
            <input
              className=" ml-2 pl-2 text-gray-500 dark:text-white bg-black bg-opacity-10 rounded-sm h-12 w-11/12 "
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
            className="w-[100px]"
          />
          <Inputs
            title={"Cost Effectiveness"}
            icon={"%"}
            id={"interest"}
            values={values.interest}
            handleChange={handleChange}
          />

          <button
             className="text-md mt-8 ml-2 w-36 font-extrabold bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300 tracking-widest"
            type="submit"
            value="Submit"
          >Submit</button>
        </div>
      </form>
    </div>
  );
}
