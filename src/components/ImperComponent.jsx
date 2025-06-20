import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [value, setValue] = useState('');
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      setValue('');
      inputRef.current.focus();
    },
    getValue: () => {
      return value;
    },
    setValue: (newValue) => {
      setValue(newValue);
    }
  }));

  return <input
  className="custom-input"
  ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)} placeholder="Type something..." />;
});

export default function ImperComponent() {
  const inputRef = useRef();
const [message, setMessage] = useState('');
  return (
    <div style={{padding: '2rem' }}>
      <h1>{message}</h1>
      <CustomInput ref={inputRef} />
      <div style={{display:'flex',gap:10}}>
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
