import Reducer from "../Reducer";
import ReducerManager from "../ReducerManager";
import ITicket from "../TicketsState/types/ITicket";
import IFiltersAndSorterAction from "./types/IFiltersAndSorterAction";
import IFiltersAndSorterState from "./types/IFiltersAndSorterState";

const initializeState = {
  filters: ['filters-list_filter_0'],
  sorter: '',
};

class FiltersAndSorterStateReducer extends Reducer<IFiltersAndSorterState>{
  constructor(reducerManager: ReducerManager, state: IFiltersAndSorterState = initializeState) {
    super(reducerManager, state);
  }

  filterate(tickets: ITicket[]): ITicket[] {
    const result = tickets.filter((ticket) => {
      const temp1 = this.state.filters.find((filter) => {
        const filterStopsCount = Number.parseInt(filter.split('_')[2]);
        const forwardStopsCount = ticket.segments[0].stops.length;
        return filterStopsCount === forwardStopsCount;
      });
      const temp2 = this.state.filters.find((filter) => {
        const filterStopsCount = Number.parseInt(filter.split('_')[2])
        const backStopsCount = ticket.segments[1].stops.length;
        return filterStopsCount === backStopsCount;
      });
      return temp1 && temp2;
    });

    return result;
  }

  sort(tickets: ITicket[]): ITicket[] {
    const compare = (a: ITicket, b: ITicket) => {
      if (this.state.sorter === 'price') return a.price - b.price;
      else if (this.state.sorter === 'duration') return a.segments[0].duration + a.segments[1].duration - b.segments[0].duration + b.segments[1].duration;
    };
    const sortedTickets = tickets.sort(this.state.sorter ? compare : undefined);
    return sortedTickets;
  }

  reduce = (state: IFiltersAndSorterState = this.state, action: IFiltersAndSorterAction): IFiltersAndSorterState => {
    this.state = { ...state };

    switch (action.type) {
      case 'SET_FILTERS': {
        this.state.filters = [...action.filters];
        break;
      };
      case 'SET_SORTER': {
        this.state.sorter = action.sorter;
        break;
      };
    };

    return this.state;
  }

}

export default FiltersAndSorterStateReducer;
