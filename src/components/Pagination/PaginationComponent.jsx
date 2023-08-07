import React from "react";

const PaginationComponent = ({ count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-3">
      <div className="flex gap-2">
        <button onClick={prevHandler}>{"<"}</button>
        {
          count ? (
            <h3>
              {count} - {totalPages}
            </h3>

          ) : null
        }

        <button onClick={nextHandler}>{">"}</button>
      </div>
      <div className="flex gap-3">
        <button onClick={firstPageHandler}>{"FIRST"}</button>
        <button onClick={lastPageHandler}>{"LAST"}</button>
      </div>
    </div>
  );
};

export default PaginationComponent;
