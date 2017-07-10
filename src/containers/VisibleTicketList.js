/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import TicketList from '../components/TicketList';
import { getMainTickets } from '../reducers/index';
import { fetchTickets, clickTicket } from '../actions/index';

class VisibleTicketList extends React.Component
{
  componentDidMount() {
    this.props.fetchTicket();
  }

  render()
  {
    return (<TicketList {...this.props} />);
  }
}

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
  users: state.users || []
});


const mapDispatchToProps = (dispatch) => ({
  onTicketClick: (id) => (dispatch(clickTicket(id))),
  fetchTicket: () => (dispatch(fetchTickets()))
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTicketList);
