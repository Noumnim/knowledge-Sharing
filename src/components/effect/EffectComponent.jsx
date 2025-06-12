import React, { useEffect, useState } from 'react'

export default function EffectComponent() {
    const [color,setColor]= useState('')
    useEffect(()=>{
        console.log('renderComponent')
    });
    const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImage(data.message));
    console.log('render')
  }, []);
  console.log(image)
  return (
    <div>
        <img src={image} alt={image}/>
      <h1 style={{color:color? color:''}}>Effect</h1>
      <button onClick={()=>setColor('yellow')}>Yellow</button>
      <button onClick={()=>setColor('red')}>Red</button>
    </div>
  )
}
