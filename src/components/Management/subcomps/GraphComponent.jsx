import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
//modules
import Option_one_component from "./subcomps_graphs/Option_one_component";
import Option_two_component from "./subcomps_graphs/Option_two_component";
//funcs
import { getAllSavings } from "@/redux/actions/savingsActions";
import { getAllInversions } from "@/redux/actions/inversionsActions";

export default function graphComponent({ option }) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [cookies, setCookie] = useCookies();
  const allSavings = useSelector((state) => state.savings.allSavings);
  const allInversions = useSelector((state) => state.inversions.allInversions);

  //pido la info al redux de los savings y las inversiones
  useEffect(() => {
    if (cookies.token) {
      const {token} = cookies;
      dispatch(getAllInversions({token}));
      dispatch(getAllSavings({token}));
    }
  }, []);

  useEffect(() => {
    switch (option) {
      case "opt1": {
        setSelectedOption(
          <Option_one_component
            inversions={allInversions}
            savings={allSavings}
          />
        );
        break;
      }
      case "opt2": {
        setSelectedOption(
          <Option_two_component
            inversions={allInversions}
            savings={allSavings}
          />
        );
        break;
      }
      default:
        setSelectedOption(null);
    }
  }, [option]);

  return <div>{selectedOption}</div>;
}
