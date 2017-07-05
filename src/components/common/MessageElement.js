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

export default class MessageElement extends React.Component
{
  render()
  {
      let styleCls = this.props.message.isAdmin ? _adminCls : _agentCls;
      return (
        <li className={"left clearfix " + styleCls.adminCls}>
          <span className={"chat-img1 " + styleCls.imgCls}>
               <img src={this.props.message.img} alt="User Avatar" className="img-circle"/>
          </span>
          <div className="chat-body1 clearfix">
            <p>{this.props.message.question}</p>
            <div className={"chat_time " + styleCls.timestampCls}><em>via {this.props.message.channel}</em>, {this.props.message.time}</div>
          </div>
        </li>
      );
  }
}
