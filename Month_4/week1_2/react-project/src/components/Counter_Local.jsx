import { useState } from "react";

function Counter_Local() {
  const [age, setAge] = useState(0);

  return (
    <>
      <h1>Hello World</h1>

      <button onClick={() => setAge(age + 1)}>Increase Age</button>

      <h2>{age}</h2>
    </>
  );
}

export default Counter_Local;
