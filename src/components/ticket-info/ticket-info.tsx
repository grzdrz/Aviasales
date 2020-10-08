import React from 'react';

import compilationOptions from '../../compilationOptions';
import {
  formateNumber,
  getHoursAndMinutesWithColon,
  getHoursAndMinutesIntervalWithPostfixes
} from '../../assets/helpers';
import ITicket from '../../storage/TicketsState/types/ITicket';

import './ticket-info.scss';

interface IProps {
  ticket: ITicket,
}

function TicketInfo(props: IProps) {
  const {
    price,
    carrier,
    segments,
  } = props.ticket;

  return (
    <div className='ticket-info'>
      <span className='ticket-info__price'>{`${formateNumber(price)} Р`}</span>
      <img
        className='ticket-info__logo'
        src={`${compilationOptions.forGithubPages ? '/Aviasales' : ''}/src/components/ticket-info/images/logo.png`}
        alt={carrier}
      />
      <span className='ticket-info__route'>
        <span className='ticket-info__origins'>
          {`${segments[0].origin} - ${segments[1].origin}`}
        </span>
        <span className='ticket-info__dates'>
          {`${getHoursAndMinutesWithColon(segments[0].date)} - ${getHoursAndMinutesWithColon(segments[1].date)}`}
        </span>
      </span>
      <span className='ticket-info__time-interval'>
        <span className='ticket-info__time-interval-title'>в пути</span>
        <span className='ticket-info__interval'>{getHoursAndMinutesIntervalWithPostfixes(segments[0].date, segments[0].duration)}</span>
      </span>
      <span className='ticket-info__stops'>
        <span className='ticket-info__stops-count'>{`${segments[0].stops.length} пересадки`}</span>
        <span className='ticket-info__stops-cities'>{`${segments[0].stops.join(', ')}`}</span>
      </span>

      <span className='ticket-info__route'>
        <span className='ticket-info__origins'>
          {`${segments[1].origin} - ${segments[0].origin}`}
        </span>
        <span className='ticket-info__dates'>
          {`${getHoursAndMinutesWithColon(segments[1].date)} - ${getHoursAndMinutesWithColon(segments[0].date)}`}
        </span>
      </span>
      <span className='ticket-info__time-interval'>
        <span className='ticket-info__time-interval-title'>в пути</span>
        <span className='ticket-info__interval'>{getHoursAndMinutesIntervalWithPostfixes(segments[1].date, segments[1].duration)}</span>
      </span>
      <span className='ticket-info__stops'>
        <span className='ticket-info__stops-count'>{`${segments[1].stops.length} пересадки`}</span>
        <span className='ticket-info__stops-cities'>{`${segments[1].stops.join(', ')}`}</span>
      </span>
    </div >
  );
}

export default TicketInfo;

