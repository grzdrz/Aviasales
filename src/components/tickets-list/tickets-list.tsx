import React/* , { useState } */ from 'react';
import { connect } from 'react-redux';
import ITicket from '../../storage/TicketsState/types/ITicket';
import ITicketsAction from '../../storage/TicketsState/types/ITicketsAction';

import ITicketsState from '../../storage/TicketsState/types/ITicketsState';
import IReducerState from '../../storage/types/IReducerState';
import Loader from '../loader/loader';
import TicketInfo from '../ticket-info/ticket-info';

import actions from './actions';
import './tickets-list.scss';

interface IProps {
  ticketsState: ITicketsState,
  setTicketsRequest: () => ITicketsAction,
  setTicketsResponse: (tickets: Array<ITicket>) => ITicketsAction,
  increaseTicketsCountOnPage: () => ITicketsAction,
}

interface IState {
}

class TicketsList extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.initialize();
  }

  initialize() {
    window.addEventListener('scroll', this.handleScroll);
    /* this.handleButtonClick(); */
  }

  handleButtonClick() {
    this.getSearchId();
  }

  async getSearchId() {
    const { setTicketsRequest } = this.props;

    const url = 'https://front-test.beta.aviasales.ru/search/';
    const response = await fetch(url);

    if (response.ok) {
      const queryResult = await response.json();

      setTicketsRequest();

      this.getTickets(queryResult.searchId);
    }
  }

  async getTickets(searchId: string) {
    const { setTicketsResponse } = this.props;

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
    /* debugger; */

    setTicketsResponse([].concat(...tickets));
  }

  handleScroll = () => {
    const {
      increaseTicketsCountOnPage,
    } = this.props;

    const scrollRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollBuffer = 100;

    if (scrollRelativeBottom <= viewportHeight + scrollBuffer) {
      increaseTicketsCountOnPage();
    }
  }

  render() {
    const {
      ticketsState,
    } = this.props;

    return (
      <ul className='tickets-list'>
        {/* <Loader /> */}
        {ticketsState.isFetching
          ? (
            <div className='tickets-list__loader'>
              <Loader />
            </div>
          )
          : (
            <>
              {ticketsState.activeTickets.map((ticket, i) => {
                if (i > ticketsState.ticketsCountOnPage) return;
                return (
                  <li className='tickets-list__ticket-info' key={`tickets-list__ticket-info_${i}`}>
                    <TicketInfo
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
            </>
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = (state: IReducerState) => state;
export default connect(mapStateToProps, actions)(TicketsList);
