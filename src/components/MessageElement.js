/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import TimeAgo from 'react-timeago'

const _employeeCls = {
  'adminCls':'',
  'imgCls':'pull-left',
  'timestampCls':'pull-right'
};

const _agentCls = {
  'adminCls':'admin_chat',
  'imgCls':'pull-right',
  'timestampCls':'pull-left'
};

const MessageElement = ({user, message}) => {
  let styleCls = _agentCls;
  if (user.userType === 'E') {
    styleCls = _employeeCls;
  }
  let nowTime = Date.now();
  return (
    <li className={"left clearfix messageItem " + styleCls.adminCls}>
          <span className={"chat-img1 " + styleCls.imgCls}>
               <img src={user.avatar} alt="User Avatar" className="img-circle"/>
          </span>
      <div className="chat-body1 clearfix">
        <div>
          <p>{message.text}</p>
          <div className={"chat_time " + styleCls.timestampCls}>
            <em>via {message.channel}</em>,&nbsp;
            <TimeAgo date={message.timestamp}/>
          </div>
        </div>

      </div>
    </li>
  );
};

export default  MessageElement;
