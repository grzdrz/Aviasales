import { Reducer } from 'react';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import IReducedState from './types/IReducerState';
import TicketsStateReducer from './TicketsState/TicketsStateReducer';
import FiltersAndSorterStateReducer from './FiltersAndSortersState/FiltersAndSorterStateReducer';

class ReducerManager {
  public reducer: Reducer<CombinedState<IReducedState>, AnyAction>;

  public filtersAndSorterState: FiltersAndSorterStateReducer;
  public ticketsState: TicketsStateReducer;

  constructor() {
    this.filtersAndSorterState = new FiltersAndSorterStateReducer(this);
    this.ticketsState = new TicketsStateReducer(this);

    this.reducer = combineReducers({
      filtersAndSorterState: this.filtersAndSorterState.reduce,
      ticketsState: this.ticketsState.reduce,
    });
  }
}

export default ReducerManager;
