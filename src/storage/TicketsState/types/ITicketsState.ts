import ITicket from "./ITicket";

interface ITicketsState {
  isFetching: boolean,
  allTickets: ITicket[],
  activeTickets: ITicket[],
}

export default ITicketsState;
