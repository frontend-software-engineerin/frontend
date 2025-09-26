import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  // empty array means run once when component mounts
  return <h1>Seconds: {seconds}</h1>;
}

export default Timer;
