import React,{useContext} from 'react';
import  {CounterButton}  from '../contexts/ButtonContext';
import CounterContext from '../contexts/CounterContext';

const CounterInner = () => {
    const count = useContext(CounterContext);
    const button = useContext(CounterButton);
    return ( <div>
        <p className=" p-3 text-red-700 ">You clicked {count} times</p>
        <button
          className="border-red-600 border-2 bg-red-200 px-4 rounded-md shadow-md m-1 h-10 hover:bg-red-500"
          onClick={button}>
          Click me
        </button>
        </div>
        
    )
}


export default CounterInner;