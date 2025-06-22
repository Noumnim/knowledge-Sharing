import React, { useReducer } from 'react'

// Reducer function to handle actions
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // Increase count
    case "decrement":
      return { count: state.count - 1 }; // Decrease count
    case "reset":
      return { count: 0 }; // Reset to 0
    default:
      return state; // Return current state if action not matched
  }
}

const initialState = {
  count: 0 // Initial count value
}

function ReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState); // useReducer setup

  return (
    <div>
      <p>Count: {state.count}</p> {/* Show current count */}

      {/* Dispatch actions */}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerComponent;
