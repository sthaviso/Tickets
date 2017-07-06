/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import {ListGroupItem} from "react-bootstrap";

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
    const img = this.props.ticket.img;
    const name = this.props.ticket.name;
    const timestamp = this.props.ticket.timestamp;
    const title = this.props.ticket.title;
    const key = this.props.ticket.key;
    return (
      <ListGroupItem key={key} active={this.props.clicked} onClick={() => this.ticketClicked(key)}>
        <span className="chat-img pull-left">
          <img src={img} alt="User Avatar" className="img-circle"/>
        </span>
        <div className="chat-body clearfix">
          <div className="header_sec">
            <strong className="primary-font">{name}</strong> <strong className="pull-right">
            {timestamp}</strong>
          </div>
          <div className="contact_sec">
            <strong className="primary-font">{title}</strong> <span className="badge pull-right">3</span>
          </div>
        </div>
      </ListGroupItem>
    );
  }

  ticketClicked(key)
  {
    this.props.dispatch({
      type: 'TICKETS_CLICKED',
      key: key,
    });
  }
}




export default connect()(TicketListElement);
