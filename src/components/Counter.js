import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  const counterStyle = {
    color: "green",
    fontSize: "240px", 
    cursor: "pointer",
    alignItems:"center",
    justifyContent:"center",
    
  };

  return <div style={counterStyle} onClick={increment}>{count}</div>;
}

export default Counter;
