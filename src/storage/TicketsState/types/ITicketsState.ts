import ITicket from "./ITicket";

interface ITicketsState {
  isFetching: boolean,
  ticketsCountOnPage: number,
  allTickets: ITicket[],
  activeTickets: ITicket[],
}

export default ITicketsState;
