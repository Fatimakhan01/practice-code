"use client";
import React, { useReducer } from "react";

type State = number;

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

  const initialState: State = 0;

  const reducer = (state: State, action: Action): State => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } 
    else if (action.type === "DECREMENT") {
      
      return state > 0 ? state - 1 : 0;
    } 
    else {
      return state;
    }
  };


export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-black font-bold text-2xl mb-4">Use Reducer Example</h1>
      <p className="text-lg mb-4">{state}</p>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="p-3 rounded text-gray-700 border border-amber-500"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="p-3 rounded text-gray-700 border border-amber-500"
        >
          -
        </button>
      </div>
    </div>
  );
}
