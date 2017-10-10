/**
 * Created by sthavisomboon on 6/29/17.
 */

import React from 'react';
import MessagesArea from '../containers/VisibleMessagesArea';
import MessageInput from '../containers/VisibleMessageInput';;

const TicketWindow = () => (
  <div className="TicketWindow">
    <MessagesArea/>
    <MessageInput />
  </div>
);

export default TicketWindow;
