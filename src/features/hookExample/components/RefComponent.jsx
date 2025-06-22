import React, { useRef } from 'react';

function RefComponent() {
  const video = useRef(); //Create ref to access video DOM element

  const handlePlay = () => {
    video.current.play(); //Use ref to play the video programmatically
  };

  return (
    <div>
      {/* Attach ref to video element */}
      <video
        ref={video}
        width="320"
        height="240"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <br />
      <button onClick={handlePlay}>Play</button> {/* Play video on click */}
    </div>
  );
}

export default RefComponent;
