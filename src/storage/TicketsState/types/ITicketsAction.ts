import IAction from "../../types/IAction";
import ITicket from "./ITicket";

interface ITicketsAction extends IAction {
  tickets: Array<ITicket>,
}

export default ITicketsAction;
