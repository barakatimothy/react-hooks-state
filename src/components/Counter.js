import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>{count}</button>;
}

export default Counter;


// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   const counterStyle = {
//     color: "green",
//     fontSize: "240px", 
//     cursor: "pointer",
//     alignItems:"center",
//     justifyContent:"center",
    
//   };

//   return <div style={counterStyle} onClick={increment}>{count}</div>;
// }




// function increment() {
//   setCount((currentCount) => currentCount + 1);
//   setCount((currentCount) => currentCount + 1);
// }