import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function LayoutComponent() {
  const [color, setColor] = useState('white'); // Initial background color

  // useLayoutEffect runs **before** the browser paints the screen
  useLayoutEffect(() => {
    console.log('useLayoutEffect Start');
    setColor('lightgreen'); // Update color immediately before paint
    console.log('useLayoutEffect Set color to lightgreen');
  }, []);

  // Uncomment this to try useEffect instead
  // useEffect(() => {
  //   console.log('useEffect Start');
  //   setColor('lightblue'); // Runs after paint (you may see white flash)
  //   console.log('useEffect Set color to lightblue');
  // }, []);

  return (
    <>
      <div style={{
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        backgroundColor: color, // Show current background color
        transition: 'background 0.3s ease',
        marginBottom: '20px'
      }}>
        <h1>Color: {color}</h1>
      </div>
    </>
  );
}
