import React from "react";

const PaginationComponent = ({ count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler }) => {
  return (
    <div>
      <div>
        <button onClick={prevHandler}>{"<"}</button>

        <h3>
          {count} - {totalPages}
        </h3>

        <button onClick={nextHandler}>{">"}</button>
      </div>

      <button onClick={firstPageHandler}>{"FIRST"}</button>
      <button onClick={lastPageHandler}>{"LAST"}</button>
    </div>
  );
};

export default PaginationComponent;
