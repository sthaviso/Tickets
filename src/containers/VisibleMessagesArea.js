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
      this.props.fetchMessages();
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.ticketId !== prevProps.ticketId)){
      this.props.fetchMessages();
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

const mapDispatchToProps = (dispatch, ownProps) =>({
    fetchMessages: () => (dispatch({
      type: 'messagesFetch',
      ticketId: ownProps.ticketId,
    }))
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleMessagesArea);
