import React, { useState } from 'react';

import './loader.scss';

function Loader() {
  return (
    <div className='loader'>
      <span className='loader__circle'></span>
      <span className='loader__text'>LOADING...</span>
    </div>
  );
}

export default Loader;
