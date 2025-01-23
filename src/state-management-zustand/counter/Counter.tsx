import storeCount from './store';

const Counter = () => {
  const { increment, reset, counter } = storeCount();
  // we can rerender component only whe n some value change by storeCount(s => s.counter);
  return (
    <div>
      Counter ({counter})
      <button
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
