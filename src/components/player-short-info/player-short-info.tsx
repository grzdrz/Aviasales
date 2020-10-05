import React from 'react';

import compilationOptions from '../../compilationOptions';

import './player-short-info.scss';

interface IProps {
  index: number,
  imageSrc?: string,
  name?: string,
  speed?: number,
  time?: string,
  penaltyTime?: string,
}

function PlayerShortInfo(props: IProps) {
  const {
    index = -1,
    imageSrc = '',
    name = 'Михаил Лихачев',
    speed = 80,
    time = '00.00.000',
    penaltyTime = '00.00.00',
  } = props;

  return (
    <div className='player-short-info'>
      <div className='player-short-info__index'>{index}</div>
      <img
        className='player-short-info__avatar'
        src={imageSrc
          ? (
            imageSrc
          ) : (
            `${compilationOptions.forGithubPages ? '/ProductSupermarket' : ''}/src/components/player-short-info/images/defaultAvatar.jpg`
          )
        }
        alt={name}
      />
      <div className='player-short-info__info'>
        <p className='player-short-info__name'>{name}</p>
        <p className='player-short-info__time-and-speed'>
          <span className='player-short-info__time'>{time}</span>
          <span className='player-short-info__speed'>{`${speed} км/ч`}</span>
        </p>
        <p className='player-short-info__penalty-time'>{`штрафное время ${penaltyTime}`}</p>
      </div>
    </div >
  );
}

export default PlayerShortInfo;

