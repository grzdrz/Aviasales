import Reducer from "../Reducer";
import ReducerManager from "../ReducerManager";
import ITicketsAction from "./types/ITicketsAction";
import ITicket from "./types/ITicket";
import ITicketsState from "./types/ITicketsState";

const initialState = {
  allTickets: new Array<ITicket>(),
};

class TicketsStateReducer extends Reducer<ITicketsState> {
  constructor(reducerManager: ReducerManager, state: ITicketsState = initialState) {
    super(reducerManager, state);
  }

  reduce = (state: ITicketsState = this.state, action: ITicketsAction): ITicketsState => {
    this.state = { ...state };

    switch (action.type) {
      case 'SET_ALL_TICKETS': {
        this.state.allTickets = [...action.tickets];
        break;
      }
    }

    return this.state;
  }
}

export default TicketsStateReducer;
