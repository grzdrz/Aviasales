import React from 'react';

import './player-short-info.scss';

interface IProps {
  index: number,
}

function PlayerShortInfo(props: IProps) {
  const {
    index = -1,
  } = props;

  return (
    <div className='player-short-info'>
      <p className='player-short-info__test'>{`test text number ${index}`}</p>
    </div>
  );
}

export default PlayerShortInfo;
