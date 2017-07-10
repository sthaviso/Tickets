/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MessagesArea from '../components/MessagesArea';

import { getSelectedTicket, getTicketMessages } from '../reducers/index';
import { fetchMessages } from '../actions/index';

class VisibleMessagesArea extends React.Component {
  componentDidMount() {
    if (this.props.ticketId) {
      this.props.fetchMessages(this.props.ticketId);
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.ticketId !== prevProps.ticketId)){
      this.props.fetchMessages(this.props.ticketId);
    }
  }

  render() {
    return (
      <MessagesArea {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  let ticket = getSelectedTicket(state);
  return getTicketMessages(state, ticket);
};

const mapDispatchToProps = (dispatch) =>({
    fetchMessages: (ticketId) => (dispatch(fetchMessages(ticketId))),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleMessagesArea);
