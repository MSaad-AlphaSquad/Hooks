import React from 'react';
import CounterInner from './CounterInner';


const CounterBody = () => {
    return (
        <div className="mb-5 rounded-md mx-auto w-32 bg-blue-200 border-2 border-yellow-300 ">
        <CounterInner/>
      </div>
    )
}


export default CounterBody;