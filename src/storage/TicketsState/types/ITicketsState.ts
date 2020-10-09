import ITicket from "./ITicket";

interface ITicketsState {
  allTickets: ITicket[],
  activeTickets: ITicket[],
}

export default ITicketsState;
