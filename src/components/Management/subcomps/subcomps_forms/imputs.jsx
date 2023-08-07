import React from 'react';

export default function inputs ({title}) {
    return (
        <div className="column-span-1">
          <div className="border-1 m-2">{title}</div>
          <div className="flex flex-row">
            <select className="border-1 m-2 bg-slate-200 rounded-2xl h-10" ></select>
            <input
              className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-3/4"
              placeholder="Enter Amount"
            ></input>
          </div>
        </div>
    )
}