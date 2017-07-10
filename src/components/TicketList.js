/**
 * Created by sthavisomboon on 7/9/17.
 */
import React from 'react';
import TicketListElement from './TicketListElement';
import { ListGroup, Panel, ProgressBar } from 'react-bootstrap';

const TicketList = ({tickets,users, onTicketClick}) => {
  if (tickets.length) {
    return (
      <div>
        <Panel className="colPanel" header="Conversations">
          <ListGroup>
            {tickets.map((ticket, index) => {
              return (
                <TicketListElement key={ticket.id} ticket={ticket}
                                   clicked={ticket.clicked} user={users[ticket.userId]}
                                   onTicketClick = {() => {onTicketClick(ticket.id);}}
                />
              );
            })}
          </ListGroup>
        </Panel>
      </div>
    );
  } else {
    return(
      <ProgressBar active now={100}/>
    );
  }
}

export default TicketList;
