/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MessageElement from './MessageElement';
import { Panel } from 'react-bootstrap';
import { getSelectedTicket } from '../../reducers/index';
class MessagesArea extends React.Component
{
  render()
  {
    if (this.props.ticket) {
      var messages = this.props.ticket.messages.map(function (msg) {
        return <MessageElement key={msg.key} message={msg}/>;
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
    } else {
      return (
        <div className="chat_area">
          <Panel header='Conversation'>
          </Panel>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {ticket : getSelectedTicket(state)};
}

export default connect(mapStateToProps)(MessagesArea);
