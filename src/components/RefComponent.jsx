import React, { useEffect, useRef, useState } from 'react'

function RefComponent() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
    </div>
  );
}

export default RefComponent