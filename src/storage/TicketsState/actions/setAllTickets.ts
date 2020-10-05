import ITicket from "../types/ITicket";

function setAllTickets(tickets: Array<ITicket>) {
  return {
    type: 'SET_ALL_TICKETS',
    tickets,
  };
}

export default setAllTickets;
