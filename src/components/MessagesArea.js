/**
 * Created by sthavisomboon on 7/9/17.
 */
import React from 'react';
import MessageElement from '../components/MessageElement';
import { Panel, ProgressBar } from 'react-bootstrap';

const MessagesArea = ({messages, title, users, isFetching}) => {
  if (messages && messages.length > 0) {
    var messages = messages.map((msg) => (
      <MessageElement key={msg.id} message={msg} user={users[msg.createdBy]}/>));

    return (
      <div className="chat_area">
        <Panel header={title}>
          <ul className="list-unstyled">
            {messages}
          </ul>
        </Panel>
      </div>
    );
  } else {
    return (
      <div className="chat_area">
        <Panel header={title}>
        </Panel>
      </div>
    );
  }

};

export default MessagesArea;
