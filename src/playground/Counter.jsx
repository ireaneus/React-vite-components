import React, { useState } from 'react';

export default function Counter() {
  let [count, setCount] = useState(0);

  let handleAddOne = () => {
    setCount((count += 1));
  };

  let handleSubOne = () => {
    setCount((count -= 1));
  };

  let handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleSubOne}>-1</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
