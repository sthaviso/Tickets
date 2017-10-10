import React from 'react';
import { connect } from 'react-redux';
import MessageInput from '../components/MessageInput';
import MessagesArea from '../components/MessagesArea';
import { submitMessage, fetchMessages } from '../actions/index';
import { getSelectedTicket, getTicketMessages} from '../reducers/index';
class VisibleTicketWindow extends React.Component {

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
    if (this.props.messages && this.props.messages.length > 0) {
      return (
        <div className="TicketWindow">
          <MessagesArea {...this.props}/>
          <MessageInput {...this.props}/>
        </div>
      )
    } else {
    return (
      <div className="TicketWindow">
        <img className="placeHolderImg" src="/smileychatsad1.png"/>
        <div className ="placeHolder">
          Click a conversation to start!
        </div>
      </div>
    )
    }
  }
}

const mapStateToProps = (state) => {
  let ticket = getSelectedTicket(state);
  let messages = getTicketMessages(state, ticket);
  let tmp = {
    ticket: ticket ,
    currentUser: state.agent ||
      {}
  };
  return Object.assign({}, messages, tmp);
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { ticket, currentUser, ticketId} = stateProps;
  const { dispatch } = dispatchProps;
  const { id } = ownProps;

  return {
    ...stateProps,
    ...ownProps,
    onSubmitMessage: (message) => {
      dispatch(submitMessage(message, ticket, currentUser));
    },
    fetchMessages: (ticketId) => (dispatch(fetchMessages(ticketId)))
  };
}


export default connect(mapStateToProps, null, mergeProps)(VisibleTicketWindow);
