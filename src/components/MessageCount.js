import React from 'react';

const MessageCount = ({count}) => {
  if (count > 0) {
    return (
      <span className="badge pull-right">{count}</span>
    );
  }

  return (<span/>);

}



export default MessageCount;
