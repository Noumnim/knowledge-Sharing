import { useEffect, useState } from 'react';

export default function EffectComponent() {
  const [image, setImage] = useState(''); // State to store image URL

  const fetchImage = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random'); // API call
      const data = await res.json(); // Convert to JSON
      setImage(data.message); // Set image URL
    } catch (err) {
      console.error('Error fetching image:', err); 
    }
  };

  useEffect(() => {
    fetchImage(); //Call once when component mounts
  }, []);

  return (
    <div id='useEffect'>
      {image && <img src={image} alt="Random dog" />}
      <br />
      <button onClick={fetchImage}>
        <h1>Random Dog</h1> 
      </button>
    </div>
  );
}
