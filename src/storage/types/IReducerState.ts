import ITicketsState from "../TicketsState/types/ITicketsState";
import IFiltersAndSorterState from "../FiltersAndSortersState/types/IFiltersAndSorterState";

interface IReducerState {
  ticketsState: ITicketsState,
  filtersAndSorterState: IFiltersAndSorterState,
}

export default IReducerState;
