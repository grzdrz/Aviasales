function setFilters(filters: string[]) {
  return {
    type: 'SET_FILTERS',
    filters,
  };
}

export default setFilters;