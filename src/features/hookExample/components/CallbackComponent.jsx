import React, { memo, useCallback, useState } from 'react'
//Memoized child component to prevent unnecessary re-renders
const Child = memo(({ onClick }) => {
  console.log("Child render"); // Logs when child renders
  return (
    <>

      <button onClick={onClick}>Increment</button>
    </>
  );
})
export default function CallbackComponent() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(prev=> prev + 1)
    console.log("add count");
  };
  //  const handleIncrement = () => {
  //   console.log("add handleIncrement");
  // };
  //Memoized function so Child doesn't re-render
  const handleIncrement = useCallback(() => {
    console.log("add handleIncrement");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>add</button>
      <Child onClick={handleIncrement} />
    </div>
  );
}
