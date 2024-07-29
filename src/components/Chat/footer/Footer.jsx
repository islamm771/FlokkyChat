import React from 'react';
import ListChatFooter from '../listchat/Footer';
import MainChatFooter from '../mainchat/Footer';
import ProfileFooter from '../profile/Footer';

const Footer = () => {
  return (
    <div className={`footer-chat-page`}>
      <ListChatFooter />
      <MainChatFooter />
      <ProfileFooter />
    </div>
  );
};

export default Footer;
