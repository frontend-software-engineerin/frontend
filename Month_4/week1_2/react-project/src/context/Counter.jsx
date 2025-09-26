import React, { useContext } from "react";
import { MyContext } from "./MyProvider";

const Counter = () => {
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Counter;
