import { useState } from 'react'

function StateComponent() {
  const [count, setCount] = useState(0); // Declare state variable 'count' with initial value 0

  return (
    <div>
      <h1>Count is {count}</h1>
      <div className='state'>
        {/* Buttons to update count state */}
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </div>
  )
}

export default StateComponent
