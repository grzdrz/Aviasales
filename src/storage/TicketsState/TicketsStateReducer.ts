import Reducer from "../Reducer";
import ReducerManager from "../ReducerManager";
import ITicketsAction from "./types/ITicketsAction";
import ITicket from "./types/ITicket";
import ITicketsState from "./types/ITicketsState";

const initialState = {
  isFetching: false,
  allTickets: new Array<ITicket>(),
  activeTickets: new Array<ITicket>(),
};

class TicketsStateReducer extends Reducer<ITicketsState> {
  constructor(reducerManager: ReducerManager, state: ITicketsState = initialState) {
    super(reducerManager, state);
  }

  obtainActiveTickets(): ITicket[] {
    let resultTickets = this.reducerManager.filtersAndSorterState.filterate(this.state.allTickets);
    resultTickets = this.reducerManager.filtersAndSorterState.sort(resultTickets);
    return resultTickets;
  }

  reduce = (state: ITicketsState = this.state, action: ITicketsAction): ITicketsState => {
    this.state = { ...state };

    switch (action.type) {
      case 'SET_TICKETS_REQUEST': {
        this.state.isFetching = true;
        break;
      }
      case 'SET_TICKETS_RESPONSE': {
        this.state.allTickets = [...action.tickets];
        this.state.isFetching = false;
        break;
      }
    }

    this.state.activeTickets = [...this.obtainActiveTickets()];
    return this.state;
  }
}

export default TicketsStateReducer;
