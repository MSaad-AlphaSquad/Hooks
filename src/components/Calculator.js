import React, { useEffect, useMemo, useState } from "react";

const Calculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [Output, setOutput] = useState(0);

  const handleChangeValue1 = (e) => {
    setValue1(Number(e.target.value));
  };

  const handleChangeValue2 = (e) => {
    setValue2(Number(e.target.value));
  };

  const addValue = useMemo(() => value1 + value2, [value1, value2])

  const calcOutput = () => {
    setOutput(addValue)
  } 

//  It will console log that value are not calculated again because of useMemo
  useEffect(() => {
      console.log(Output)
  },[Output])

  return (
    <div className="mt-20 container px-4 mx-auto border-2">
      <p className="my-4 ">2) Calculator made by useEffect, useMemo & useState</p>
      <div className="mb-5 rounded-md mx-auto w-96 p-5 bg-blue-200 border-blue-200 border-2  ">
        <h1 className=" text-2xl py-3 mx-4 ">
          {value1} + {value2}
        </h1>
        <label>Num 1:</label>
        <input className= 'border-2 border-gray-700 w-10 mx-2 px-2 '
          value={value1}
          onChange={handleChangeValue1}
        ></input>
        <label className="ml-3">Num 2:</label>
        <input className= 'border-2 border-gray-700 w-10 mx-2  px-2'
          value={value2}
          onChange={handleChangeValue2}
        ></input>
        
        <button className=" bg-red-400 text-white px-2 ml-5 border-2 border-gray-700 " onClick={calcOutput} type="button">
          Calculate
        </button>
        <h1 className=" py-5  text-2xl " >Output: {Output}</h1>
      </div>
    </div>
  );
};

export default Calculator;
