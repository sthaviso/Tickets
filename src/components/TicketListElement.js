/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import {ListGroupItem} from "react-bootstrap";


const TicketListElement = ({clicked, onTicketClick, user, ticket}) => (
  <ListGroupItem active={clicked} onClick={() => onTicketClick()}>
        <span className="chat-img pull-left">
          <img src={user.img} alt="User Avatar" className="img-circle"/>
        </span>
    <div className="chat-body clearfix">
      <div className="header_sec">
        <strong className="primary-font">{user.name}</strong> <strong className="pull-right">
        {ticket.timestamp}</strong>
      </div>
      <div className="contact_sec">
        <strong className="primary-font">{ticket.text}</strong> <span className="badge pull-right">3</span>
      </div>
    </div>
  </ListGroupItem>
);

export default TicketListElement;

