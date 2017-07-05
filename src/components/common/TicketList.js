/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import TicketListElement from './TicketListElement';
import { ListGroup, Panel, ProgressBar } from 'react-bootstrap';

class TicketList extends React.Component
{
  constructor(props)
  {
    super(props);
    if (0 === this.props.tickets.length) {

      this.props.dispatch({
        type: 'ticketsFetch'
      })
    }
  }
  render()
  {
    if (this.props.tickets.length) {
      return (
        <div>
          <Panel className="colPanel" header="Conversation">
            <ListGroup>
              {this.props.tickets.map((ticket, index) => {
                return (
                  <TicketListElement key={ticket.id} ticket={ticket}/>
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
}

function mapStateToProps(state) {
  return( {
    tickets: state.tickets.list || [],
  });
}

export default connect(mapStateToProps)(TicketList);
