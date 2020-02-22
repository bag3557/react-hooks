import React, { useState } from "react";

const HookCounterTwo = () => {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <br />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <br />
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <br />
      <button onClick={incrementFive}>Increment by 5</button>
    </div>
  );
};

export default HookCounterTwo;
