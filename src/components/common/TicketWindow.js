/**
 * Created by sthavisomboon on 6/29/17.
 */

import React from 'react';
import MessagesArea from './MessagesArea';
import MessageInput from './MessageInput';

export default class TicketWindow extends React.Component
{
  render()
  {
    return (
      <div className="TicketWindow">
        <MessagesArea/>
        <MessageInput />
      </div>
    );
  }
}
