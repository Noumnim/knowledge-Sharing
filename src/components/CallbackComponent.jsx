import React, { memo, useCallback, useState } from 'react'
const Child = memo(({ onClick }) => {
  console.log("Child render");
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
  //   console.log("Increment");
  // };

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
