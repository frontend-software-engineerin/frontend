import React, { createContext, useState } from "react";
// Step 1: Create a context
const MyContext = createContext();
// Step 2: Create a provider component
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
