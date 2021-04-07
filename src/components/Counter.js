import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter rendered one time");
  },[])

  return (
   <div className=" border-2 my-8 container mx-auto px-4 ">
   <p className="my-4 ">1) Counter made using Using useEffect and useState</p>
    <div className="mb-5 rounded-md mx-auto w-32 bg-blue-200 border-2 border-yellow-300 ">
      <p className=" p-3 text-red-700 ">You clicked {count} times</p>
      <button
        className="border-red-600 border-2 bg-red-200 px-4 rounded-md shadow-md m-1 h-10 hover:bg-red-500"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      </div>
    </div>
  );
};

export default App;
