import React from 'react';

import TicketsList from '../../components/tickets-list/tickets-list';
import CheckboxList from '../../components/checkbox-list/checkbox-list';
import './prod-page.scss';

interface IProps {
}

function ProdPage(props: IProps) {
  const { } = props;

  return (
    <div className='prod-page'>
      <header className='prod-page__header'>
        HEADER
      </header>
      <div className='prod-page__main-content'>
        <div className='prod-page__filter-panel'>
          <CheckboxList />
        </div>
        <div className='prod-page__tickets-list'>
          <div className='prod-page__sorters'>
            SORTERS
          </div>
          <div className='prod-page__tickets'>
            <TicketsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdPage
