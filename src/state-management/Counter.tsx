import { useReducer, useState } from 'react';
import { countReducer, typeing } from './reducers/count_reducer';

const Counter = () => {
  const [value, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({type: typeing.increment})}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({type: typeing.reset})}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
