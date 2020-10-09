import React from 'react';
import { connect } from 'react-redux';

import IFiltersAndSorterAction from '../../storage/FiltersAndSortersState/types/IFiltersAndSorterAction';
import IFiltersAndSorterState from '../../storage/FiltersAndSortersState/types/IFiltersAndSorterState';
import IReducerState from '../../storage/types/IReducerState';
import actions from './actions';

import './sorter-panel.scss';

interface IProps {
  filtersAndSorterState: IFiltersAndSorterState,
  setSorter: (sorter: string) => IFiltersAndSorterAction,
}

function SorterPanel(props: IProps) {
  const {
    filtersAndSorterState,
    setSorter,
  } = props;

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const targetButton = event.target as HTMLButtonElement;

    const sorterValue = targetButton.dataset['sorterValue'];
    setSorter(sorterValue);
  };

  return (
    <div className='sorter-panel'>
      <button
        className={`sorter-panel__button ${filtersAndSorterState.sorter === 'price' ? 'sorter-panel__button_active' : ''}`}
        data-sorter-value='price'
        onClick={handleButtonClick}
      >
        самый дешевый
      </button>
      <button
        className={`sorter-panel__button ${filtersAndSorterState.sorter === 'duration' ? 'sorter-panel__button_active' : ''}`}
        data-sorter-value='duration'
        onClick={handleButtonClick}
      >
        самый быстрый
      </button>
    </div >
  );
}

const mapStateToProps = (state: IReducerState) => state;
export default connect(mapStateToProps, actions)(SorterPanel);
