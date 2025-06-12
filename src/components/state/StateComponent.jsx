import React, { useEffect, useState } from 'react'
import './state.css'
function StateComponent() {
    const [count,setCount]=useState(0);

  return (
    <div className='state'>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}
export default StateComponent