import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>เพิ่ม</button>;
});

function App() {
  const [count, setCount] = useState(0);

const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onClick={incrementCount} />
    </div>
  );
}

export default App;
