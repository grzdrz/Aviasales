import { Reducer } from 'react';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import IReducedState from './types/IReducerState';
import TicketsStateReducer from './TicketsState/TicketsStateReducer';

class ReducerManager {
  public reducer: Reducer<CombinedState<IReducedState>, AnyAction>;

  public ticketsState: TicketsStateReducer;

  constructor() {
    this.ticketsState = new TicketsStateReducer(this);

    this.reducer = combineReducers({
      ticketsState: this.ticketsState.reduce,
    });
  }
}

export default ReducerManager;
