import { Reducer } from 'react';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import IReducedState from './IReducedState';

class ReducerManager {
  public reducer: Reducer<CombinedState<IReducedState>, AnyAction>;

  constructor() {

    this.reducer = combineReducers({
    });
  }
}

export default ReducerManager;
