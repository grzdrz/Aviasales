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

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async handleButtonClick() {
    this.getSearchId();
  }

  async getSearchId() {
    const url = 'https://front-test.beta.aviasales.ru/search/';
    const response = await fetch(url);

    if (response.ok) {
      const queryResult = await response.json();

      this.getTickets(queryResult.searchId);
    }
  }

  async getTickets(searchId: string) {
    const tickets = [];
    let queryResult;
    do {
      try {
        const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
        const response = await fetch(url);

        if (response.ok) {
          queryResult = await response.json();
          tickets.push(...queryResult.tickets);
        }
      } catch (error) {
        continue;
      }
    } while (!queryResult.stop);
    debugger;
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
              <li className='players-list__player-short-info' key={`players-list__player-short-info_${i}`}>
                <PlayerShortInfo index={i} />
              </li>
            );
          })
        }
        <button
          onClick={this.handleButtonClick}
          style={{
            width: '100px',
            height: '50px',
            background: 'red',
            border: '1px solid black',
          }}
        >
          serverTEST
        </button>
      </ul>
    );
  }
}

export default PlayersList;
