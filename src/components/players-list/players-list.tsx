import React from 'react';

import PlayerShortInfo from '../player-short-info/player-short-info';

import './players-list.scss';

interface IProps {

}

interface IState {

}

class PlayersList extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {

    } = this.props;

    const playersTEST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <ul className='players-list'>
        {
          playersTEST.map((player, i) => {
            return (
              <li className='players-list__player-short-info'>
                <PlayerShortInfo index={i} />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default PlayersList;
