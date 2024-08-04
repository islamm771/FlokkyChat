import React from "react";
import { BsReply } from "react-icons/bs";
import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { IoMdCopy } from "react-icons/io";
import { IoFlagOutline } from "react-icons/io5";
import {
  MdDeleteOutline,
  MdInfoOutline,
  MdOutlineAddReaction,
  MdOutlineMessage,
} from "react-icons/md";
import { RiReplyLine, RiShareForwardLine, RiUnpinLine } from "react-icons/ri";
import { TiPinOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../../../app/feature/ListChatSlice";

const ListAction = ({
  activeIndex,
  index,
  reactionsRefList,
  isListActionMessage,
  showFullList,
  data,
  handleViewProfile,
  handleToggleFullList,
  handleToggleDeleteMessage,
  handleToggleMessageInfo,
  handleToggleReactionsList,
  handleOpenReplyMessage,
  handleToggleReportMessage,
  handleForwardMessage,
  handleTogglePin,
  isPin,
  handleToggleStar,
  isStar,
  handleMessageCopy,
  HanldeCloseTemporay,
}) => {
  const { activeMessage } = useSelector(selectGlobal);
  return (
    <>
      {" "}
      {activeIndex === index && (
        <div
          ref={reactionsRefList}
          className={`list-action-main-chat ${
            activeIndex ? "list-active-main-chat" : "list-disactive-main-chat"
          } ${isListActionMessage ? "animation" : ""}`}
        >
          <div className="ul-main-chat">
            <div
              className={`listOne-main-chat ${
                showFullList
                  ? "Active-chat-main-list-action"
                  : "disActive-chat-main-list-action"
              }`}
            >
              {data.sendme && (
                <li onClick={handleViewProfile}>
                  <p>View Profile</p>
                  <FaRegEye />
                </li>
              )}
              <li onClick={handleToggleMessageInfo}>
                <p>Message info</p>
                <MdInfoOutline />
              </li>
              {/* <li onClick={handleOpenReplyMessage}>
                <p>Reply</p>
                <BsReply />
              </li>
              <li onClick={() => handleToggleReactionsList(index)}>
                <p>React</p>
                <MdOutlineAddReaction />
              </li> */}
              {data.sendme && (
                <li onClick={handleToggleReportMessage}>
                  <p>Report</p>
                  <IoFlagOutline />
                </li>
              )}
              {
                activeMessage == 1 && data.sendme && (
                  <>
                  <li>
                    <p>Message Ahmed</p>
                    <MdOutlineMessage />
                  </li>
                  <li>
                    <p>Reply Privately</p>
                    <RiReplyLine />
                  </li>
                  </>
                )
              }
              <li onClick={handleForwardMessage}>
                <p>Forward</p>
                <RiShareForwardLine />
              </li>
              <li
                className="more-less-list-chat"
                onClick={handleToggleFullList}
              >
                More...
              </li>
            </div>
            <div
              className={`listTwo-main-chat ${
                showFullList
                  ? "disActive-chat-main-list-actionListTwo"
                  : "Active-chat-main-list-actionListTwo"
              }`}
            >
              <li onClick={handleTogglePin}>
                {isPin ? (
                  <>
                    <p>Pin</p>
                    <TiPinOutline />
                  </>
                ) : (
                  <>
                    <p>UnPin</p>
                    <RiUnpinLine />
                  </>
                )}
              </li>
              <li onClick={handleToggleStar}>
                {isStar ? (
                  <>
                    <p>Star</p>
                    <FaRegStar />
                  </>
                ) : (
                  <>
                    <p>UnStar</p>
                    <FaStar />
                  </>
                )}
              </li>
              <li onClick={handleMessageCopy(data.message)}>
                <p>Copy</p>
                <IoMdCopy />
              </li>
              {!data.sendme && (
                <li onClick={HanldeCloseTemporay}>
                  <p>Edit</p>
                  <FiEdit2 />
                </li>
              )}
              <li onClick={() => handleToggleDeleteMessage(data.sendme)}>
                <p>Delete</p>
                <MdDeleteOutline />
              </li>
              <li
                className="more-less-list-chat"
                onClick={handleToggleFullList}
              >
                Less
              </li>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListAction;
