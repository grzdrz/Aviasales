import React from 'react';
import { connect } from 'react-redux';
import ITicket from '../../storage/TicketsState/types/ITicket';
import ITicketsAction from '../../storage/TicketsState/types/ITicketsAction';

import ITicketsState from '../../storage/TicketsState/types/ITicketsState';
import IReducedState from '../../storage/types/IReducerState';
import PlayerShortInfo from '../player-short-info/player-short-info';

import actions from './actions';
import './players-list.scss';

interface IProps {
  setAllTickets: (tickets: Array<ITicket>) => ITicketsAction,
  ticketsState: ITicketsState,
}

interface IState {

}

class PlayersList extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.initialize();
  }

  initialize() {
    this.handleButtonClick();
  }

  /* async  */handleButtonClick() {
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
    const {
      setAllTickets,
    } = this.props;

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

    setAllTickets([].concat(...tickets));
  }

  render() {
    const {
      ticketsState,
    } = this.props;

    return (
      <ul className='players-list'>
        {
          ticketsState.allTickets.map((ticket, i) => {
            if (i > 10) return;
            return (
              <li className='players-list__player-short-info' key={`players-list__player-short-info_${i}`}>
                <PlayerShortInfo
                  index={i}
                  ticket={ticket}
                />
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

const mapStateToProps = (state: IReducedState) => state;
export default connect(mapStateToProps, actions)(PlayersList);
