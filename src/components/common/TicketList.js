/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import TicketListElement from './TicketListElement';
import { ListGroup, Panel } from 'react-bootstrap';

class TicketList extends React.Component
{
  render()
  {
    return (
      <div>
        <Panel className="colPanel" header="Conversation">
          <ListGroup>
            {this.props.tickets.map((ticket, index) => {
              return(
                <TicketListElement key={ticket.id} ticket={ticket}/>
              );
            })}
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return( {
    tickets: state.tickets.list
  });
}

export default connect(mapStateToProps)(TicketList);
