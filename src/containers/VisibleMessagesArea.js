/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MessagesArea from '../components/MessagesArea';

import { getSelectedTicket, getTicketMessages } from '../reducers/index';

class VisibleMessagesArea extends React.Component {
  componentDidMount() {
    if (this.props.ticketId) {
      this.fetchMessages();
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.ticketId !== prevProps.ticketId)){
      this.fetchMessages();
    }
  }

  render() {
    return (
      <MessagesArea {...this.props}/>
    );
  }

  fetchMessages() {
    this.props.dispatch({
      type: 'messagesFetch',
        ticketId: this.props.ticketId,
    });
  }
}

function mapStateToProps(state) {
  let ticket = getSelectedTicket(state);
  return getTicketMessages(state, ticket);
}

export default connect(mapStateToProps)(VisibleMessagesArea);
