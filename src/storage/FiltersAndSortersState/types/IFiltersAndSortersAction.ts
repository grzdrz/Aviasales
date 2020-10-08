import IAction from "../../types/IAction";

interface IFiltersAndSortersAction extends IAction {
  sorters: string[],
  filters: string[],
}

export default IFiltersAndSortersAction;
