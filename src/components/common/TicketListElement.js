/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import {ListGroupItem} from "react-bootstrap";
import { getUserById } from '../../reducers/index';

class TicketListElement extends React.Component
{

  constructor(props)
  {
    super(props);

    //bind<this> to the event methods
    this.ticketClicked = this.ticketClicked.bind(this);
  }

  render()
  {
    const img = this.props.user.img;
    const name = this.props.user.name;
    const timestamp = this.props.ticket.timestamp;
    const text = this.props.ticket.text;
    const id = this.props.ticket.id;
    return (
      <ListGroupItem active={this.props.clicked} onClick={() => this.ticketClicked(id)}>
        <span className="chat-img pull-left">
          <img src={img} alt="User Avatar" className="img-circle"/>
        </span>
        <div className="chat-body clearfix">
          <div className="header_sec">
            <strong className="primary-font">{name}</strong> <strong className="pull-right">
            {timestamp}</strong>
          </div>
          <div className="contact_sec">
            <strong className="primary-font">{text}</strong> <span className="badge pull-right">3</span>
          </div>
        </div>
      </ListGroupItem>
    );
  }

  ticketClicked(id)
  {
    this.props.dispatch({
      type: 'TICKETS_CLICKED',
      id: id,
    });
  }
}



function mapStateToProps(state, props) {
  return {
    user: getUserById(state, props.ticket.userId),
  };
}
export default connect(mapStateToProps)(TicketListElement);
