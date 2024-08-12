import React, { useEffect } from 'react'
import Grouping from '../Group/Grouping'
import PeopleChat from '../ListPeople/PeopleChat'
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal, toggleWrapgroupPeopleChat } from '../../../app/feature/ListChatSlice';
import ChatRooms from '../../Chat/listchat/ChatRooms';
import Contacts from '../Contacts';

const Chats = () => {
    const { isListActionPeopleChat, isWrapgroupPeopleChat } =
    useSelector(selectGlobal);
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     if (window.innerWidth <= 632) {
    //         dispatch(toggleWrapgroupPeopleChat());
    //     }
    // }, [dispatch]);
  return (
    <div className={`wrap-grouping-people-chat ${isListActionPeopleChat ? "wAuto-wrap-grupPeopleChat" : ""} ${
        isWrapgroupPeopleChat
          ? `${ isListActionPeopleChat
                ? "wrap-grouping-people-chatSm"
                : "wrap-grouping-people-chat-full-width"
            }`
          : "wrap-grouping-people-chat-disactive"
      }`}
    >
      <div
        className={`${ isListActionPeopleChat ? "GroupingContainerSm" : "GroupingContainer"}`}>
        <Grouping />
      </div>
      <div className={`${ isListActionPeopleChat ? "PeopleChatContainerSm" : "PeopleChatContainer"}`}>
        <PeopleChat />
      </div>
      { window.innerWidth <= 632 && (
          <>
            <ChatRooms />
            <Contacts />
          </>
        )}
    </div>
  )
}

export default Chats