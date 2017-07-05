/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MessageElement from './MessageElement';
import { Panel } from 'react-bootstrap';
class MessagesArea extends React.Component
{
  render()
  {
    var messages = this.props.ticket.messages.map(function(msg) {
      return <MessageElement key={msg.key} message={msg} />;
    });

    return (
      <div className="chat_area">
          <Panel header={this.props.ticket.title}>
          <ul className="list-unstyled">
            {messages}
          </ul>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  for (const index in state.tickets.list){
    if (state.tickets.list[index].key === state.selectedTicketKey) {
      return (
        {
          ticket: state.tickets.list[index]
        }
      )
    }
  }
  return( {
    ticket: state.tickets.list[0]
  });
}

export default connect(mapStateToProps)(MessagesArea);
