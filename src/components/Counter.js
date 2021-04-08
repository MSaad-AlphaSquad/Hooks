import React, { useState, useEffect } from "react";
import CounterBody from "./CounterBody";
import {CounterButton} from "../contexts/ButtonContext";
import CounterContext from "../contexts/CounterContext";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter rendered one time");
  },[])


  const setCounter = () => {
    setCount(count + 1)
  }

  return (
   <div className=" border-2 my-8 container mx-auto px-4 ">
   <p className="my-4 ">1) Counter made using Using useEffect, useState and Context System</p>
   <CounterButton.Provider value={setCounter}>
   <CounterContext.Provider value={count}>
     <CounterBody/>
     </CounterContext.Provider>
     </CounterButton.Provider>
    </div>
  );
};

export default App;
