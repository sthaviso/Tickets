/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import TicketList from '../components/TicketList';
import { getMainTickets } from '../reducers/index';


class VisibleTicketList extends React.Component
{
  componentDidMount() {
    this.props.fetchData();
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
  onTicketClick: (id) => (
    dispatch({
      type: 'TICKETS_CLICKED',
      id: id,
    }
  )),
  fetchData: () => (
    dispatch({
    type: 'ticketsFetch'
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTicketList);
