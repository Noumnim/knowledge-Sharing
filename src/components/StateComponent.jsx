import { useState } from 'react'
function StateComponent() {
    const [count,setCount]=useState(0);

  return (
    <div >
      
        <h1>Count is {count}</h1>
        <div className='state'>
          <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        </div>
        
    </div>
  )
}
export default StateComponent