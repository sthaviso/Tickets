/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MessageElement from './MessageElement';
import { Panel, ProgressBar } from 'react-bootstrap';
import { getSelectedTicket, getTicketMessages } from '../../reducers/index';
class MessagesArea extends React.Component
{
  render()
  {
    if (this.props.messages && this.props.messages.length > 0) {
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
    } if (this.props.title) {
      this.props.dispatch({
          type: 'messagesFetch',
          ticketId: this.props.ticketId,
        }
      );
      return (
        <div className="chat_area">
          <Panel header={this.props.title}>
            <ProgressBar active now={100}/>
          </Panel>
        </div>
      );

    } else {
      return (
        <div className="chat_area">
          <ProgressBar active now={100}/>
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
