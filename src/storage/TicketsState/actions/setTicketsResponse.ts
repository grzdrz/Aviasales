import ITicket from "../types/ITicket";

function setTicketsResponse(tickets: ITicket[]) {
  return {
    type: 'SET_TICKETS_RESPONSE',
    tickets,
  };
}

export default setTicketsResponse;
