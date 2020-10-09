function setSorter(sorter: string) {
  return {
    type: 'SET_FILTERS_AND_SORTERS',
    sorter,
  };
}

export default setSorter;
