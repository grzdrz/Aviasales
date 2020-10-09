import IAction from "../../types/IAction";

interface IFiltersAndSorterAction extends IAction {
  filters?: string[],
  sorter?: string,
}

export default IFiltersAndSorterAction;
