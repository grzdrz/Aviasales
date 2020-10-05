import IAction from "./types/IAction";
import ReducerManager from "./ReducerManager";

abstract class Reducer<TState> {
  public reducerManager: ReducerManager;
  public state: TState;

  constructor(reducerManager: ReducerManager, state: TState) {
    this.reducerManager = reducerManager;
    this.state = state;
  }

  abstract reduce(state: TState, action: IAction): TState;
}

export default Reducer;
