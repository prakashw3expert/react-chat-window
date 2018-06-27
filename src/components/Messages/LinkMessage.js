import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

var LinkMessage = function LinkMessage(props) {
  return React.createElement(
    'a',
    { href: props.messageType, className: 'sc-message--text'},
    props.data.text
  );
};

export default LinkMessage;