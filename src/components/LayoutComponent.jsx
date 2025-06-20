import React, { useEffect, useLayoutEffect, useState } from 'react'
export default function LayoutComponent() {

 const [color, setColor] = useState('white');
  useLayoutEffect(() => {
    console.log('useLayoutEffect Start');

    setColor('lightgreen');
    console.log('useLayoutEffect Set color to lightblue');
  }, []);

  // useEffect(() => {
  //   console.log('useEffect Start');
  //   setColor('lightblue');
  //   console.log('useEffect Set color to lightgreen');
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
      backgroundColor: color,
      transition: 'background 0.3s ease',
      marginBottom:'20px'
    }}>
      <h1>Color: {color}</h1>
    </div>
    </>
  
  );
}
