/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MessageElement from './MessageElement';
import { Panel } from 'react-bootstrap';
import { getSelectedTicket, getTicketMessages } from '../../reducers/index';
class MessagesArea extends React.Component
{
  render()
  {
    if (this.props.messages) {
      var messages = this.props.messages.map(function (msg) {
        return <MessageElement key={msg.id} message={msg} userId={msg.userId}/>;
      });

      return (
        <div className="chat_area">
          <Panel header={this.props.title}>
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
  let ticket = getSelectedTicket(state);
  return getTicketMessages(state, ticket);
}

export default connect(mapStateToProps)(MessagesArea);
