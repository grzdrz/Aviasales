import Reducer from "../Reducer";
import ReducerManager from "../ReducerManager";
import IAction from "../types/IAction";
import IFiltersAndSortersAction from "./types/IFiltersAndSortersAction";
import IFiltersAndSortersState from "./types/IFiltersAndSortersState";

const initializeState = {
  filters: [''],
  sorters: [''],
};

class FiltersAndSortersStateReducer extends Reducer<IFiltersAndSortersState>{
  constructor(reducerManager: ReducerManager, state: IFiltersAndSortersState = initializeState) {
    super(reducerManager, state);
  }

  reduce(state: IFiltersAndSortersState = this.state, action: IFiltersAndSortersAction): IFiltersAndSortersState {
    this.state = { ...state };

    switch (action.type) {
      case 'SET_FILTERS_AND_SORTERS': {
        this.state.filters = [...action.filters];
        this.state.sorters = [...action.sorters];
        break;
      };
    };

    return this.state;
  }

}

export default FiltersAndSortersStateReducer;
