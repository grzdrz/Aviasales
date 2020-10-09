import React, { useState } from 'react';

import './loader.scss';

function Loader() {
  const [isRotating, setIsRotating] = useState(true);

  const rotate = () => {
    setTimeout(() => {
      setIsRotating(true);
    }, 0);
  };

  rotate();
  return (
    <div className='loader'>
      <span className={`loader__circle ${isRotating ? 'loader__circle_rotating' : ''}`}></span>
      <span className='loader__text'>LOADING...</span>
    </div>
  );
}

export default Loader;
