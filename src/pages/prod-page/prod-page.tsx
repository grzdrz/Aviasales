import React from 'react';
import { connect } from 'react-redux';

import IReducerState from '../../storage/types/IReducerState';
import IFiltersAndSorterState from '../../storage/FiltersAndSortersState/types/IFiltersAndSorterState';
import TicketsList from '../../components/tickets-list/tickets-list';
import FiltersList from '../../components/filters-list/filters-list';
import SorterPanel from '../../components/sorter-panel/sorter-panel';

import './prod-page.scss';

const filterItems = [
  {
    isChecked: false,
    name: 'filters-list_filter_4',
    text: 'Все',
  },
  {
    isChecked: false,
    name: 'filters-list_filter_0',
    text: 'Без пересадок',
  },
  {
    isChecked: false,
    name: 'filters-list_filter_1',
    text: '1 пересадка',
  },
  {
    isChecked: false,
    name: 'filters-list_filter_2',
    text: '2 пересадки',
  },
  {
    isChecked: false,
    name: 'filters-list_filter_3',
    text: '3 пересадки',
  },
];

interface IProps {
  filtersAndSorterState: IFiltersAndSorterState,
}

function ProdPage(props: IProps) {
  const {
    filtersAndSorterState,
  } = props;

  return (
    <div className='prod-page'>
      <header className='prod-page__header'>
        HEADER
      </header>
      <div className='prod-page__main-content'>
        <div className='prod-page__filter-panel'>
          <FiltersList
            items={filterItems.map((filterItem) => {
              filterItem.isChecked = filtersAndSorterState.filters.includes(filterItem.name);
              return filterItem;
            })}
          />
        </div>
        <div className='prod-page__tickets-list'>
          <div className='prod-page__sorter-panel'>
            <SorterPanel />
          </div>
          <div className='prod-page__tickets'>
            <TicketsList />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => state;
export default connect(mapStateToProps)(ProdPage);
