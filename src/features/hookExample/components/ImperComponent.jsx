import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

// Child input component using forwardRef
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(); // Internal ref for the input element
  const [value, setValue] = useState(''); // State for input value

  //Expose methods to parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus(); // Focus the input
    },
    clear: () => {
      setValue(''); // Clear value and focus input
      inputRef.current.focus();
    },
    getValue: () => {
      return value; // Return current value
    },
    setValue: (newValue) => {
      setValue(newValue); // Set new value
    }
  }));

  return (
    <input
      className="custom-input"
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type something..."
    />
  );
});

export default function ImperComponent() {
  const inputRef = useRef(); // Ref for CustomInput
  const [message, setMessage] = useState(''); // Message to show input value

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{message}</h1>
      <CustomInput ref={inputRef} /> {/* Pass ref to child */}
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>
        <button onClick={() => inputRef.current.clear()}>
          Clear Input
        </button>
        <button onClick={() => setMessage(inputRef.current.getValue())}>
          Get Input
        </button>
        <button onClick={() => inputRef.current.setValue('Hello')}>
          Set Input
        </button>
      </div>
    </div>
  );
}
