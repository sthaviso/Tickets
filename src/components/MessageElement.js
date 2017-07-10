/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';

const _agentCls = {
  'adminCls':'',
  'imgCls':'pull-left',
  'timestampCls':'pull-right'
};

const _adminCls = {
  'adminCls':'admin_chat',
  'imgCls':'pull-right',
  'timestampCls':'pull-left'
};

const MessageElement = ({user, message}) => {
  let styleCls = user.isAdmin ? _adminCls : _agentCls;
  return (
    <li className={"left clearfix messageItem " + styleCls.adminCls}>
          <span className={"chat-img1 " + styleCls.imgCls}>
               <img src={user.img} alt="User Avatar" className="img-circle"/>
          </span>
      <div className="chat-body1 clearfix">
        <p>{message.text}</p>
        <div className={"chat_time " + styleCls.timestampCls}><em>via {message.channel}</em>, {message.time}</div>
      </div>
    </li>
  );
};

export default  MessageElement;
