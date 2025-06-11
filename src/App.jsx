import { useState, useEffect, useContext, useCallback, useMemo, useReducer, useRef, useLayoutEffect, useImperativeHandle, createContext, forwardRef } from 'react';
import { useRef as useReactRef, useImperativeHandle as useReactImperativeHandle } from 'react';

// 1. useState Example
export function StateExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 2. useEffect Example
export function EffectExample() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>Time: {time.toLocaleTimeString()}</p>;
}

// 3. useContext Example
const ThemeContext = createContext();
export function ContextExampleWrapper() {
  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      <ContextExample />
    </ThemeContext.Provider>
  );
}
function ContextExample() {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme.color }}>This is themed text.</p>;
}

// 4. useCallback Example
export function CallbackExample() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(c => c + 1), []);
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

// 5. useMemo Example
export function MemoExample() {
  const [number, setNumber] = useState(0);
  const double = useMemo(() => number * 2, [number]);
  return (
    <div>
      <input type="number" onChange={e => setNumber(Number(e.target.value))} />
      <p>Double: {double}</p>
    </div>
  );
}

// 6. useReducer Example
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}
export function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

// 7. useRef Example
export function RefExample() {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

// 8. useLayoutEffect Example
export function LayoutEffectExample() {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.style.color = 'red';
  }, []);
  return <div ref={ref}>This text becomes red after layout.</div>;
}

// 9. useImperativeHandle Example
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useReactRef();
  useReactImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  return <input ref={inputRef} />;
});

export function ImperativeHandleExample() {
  const ref = useRef();
  return (
    <div>
      <CustomInput ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus from parent</button>
    </div>
  );
}

// App component
export default function App() {
  return (
    <div style={{padding:'20px'}}>
      <StateExample />
      <EffectExample />
      <ContextExampleWrapper />
      <CallbackExample />
      <MemoExample />
      <ReducerExample />
      <RefExample />
      <LayoutEffectExample />
      <ImperativeHandleExample />
    </div>
  );
}
