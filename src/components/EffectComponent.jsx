import{ useEffect, useState } from 'react';

export default function EffectComponent() {
  const [image, setImage] = useState('');

  const fetchImage = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setImage(data.message);
    } catch (err) {
      console.error('Error fetching image:', err);
    }
  };
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div id='useEffect'>
      {image && <img src={image} alt="Random dog" />}
      <br />
      <button onClick={fetchImage}><h1>Random Dog</h1></button>
    </div>
  );
}
