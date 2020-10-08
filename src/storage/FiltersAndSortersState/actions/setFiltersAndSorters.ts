import IFiltersAndSortersState from "../types/IFiltersAndSortersState";

function setFiltersAndSorters(state: IFiltersAndSortersState) {
  return {
    type: 'SET_FILTERS_AND_SORTERS',
    state,
  };
}

export default setFiltersAndSorters;
