import React from 'react';
import { connect } from 'react-redux';
import MessageInput from '../components/MessageInput';
import { submitMessage } from '../actions/index';
import { getSelectedTicket } from '../reducers/index';
class VisibleMessageInput extends React.Component {
  render() {
    return (
      <MessageInput {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ticket: getSelectedTicket(state),
    currentUser: state.agent ||
      {},
}};

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { ticket, currentUser } = stateProps;
  const { dispatch } = dispatchProps;
  const { id } = ownProps;

  return {
    ...stateProps,
    ...ownProps,
    onSubmitMessage: (message) => {
      dispatch(submitMessage(message, ticket, currentUser));
    }
  };
}


export default connect(mapStateToProps, null, mergeProps)(VisibleMessageInput);
