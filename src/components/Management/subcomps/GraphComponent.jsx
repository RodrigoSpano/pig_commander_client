import React, { useState, useEffect } from "react";
import Option_one_component from "./subcomps_graphs/Option_one_component";
import Option_two_component from "./subcomps_graphs/Option_two_component";

export default function graphComponent({ option }) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    switch (option) {
      case "opt1": {
        setSelectedOption(<Option_one_component />);
        break;
      }
      case "opt2": {
        setSelectedOption(<Option_two_component />);
        break;
      }
      default:
        setSelectedOption(null);
    }
  }, [option]);

  return <div>{selectedOption}</div>;
}
