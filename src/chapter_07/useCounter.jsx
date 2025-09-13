import React, { useState } from "react";

//custom hook - freshman -ok main2
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
