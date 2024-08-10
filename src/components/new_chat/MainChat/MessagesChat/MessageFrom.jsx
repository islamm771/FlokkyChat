import { IoIosArrowDown } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { FaReply, FaCheckDouble } from "react-icons/fa";
import ForwardMessage from "../ForwardMessage/ForwardMessage";
import ListAction from "../ListAction/ListAction";
import Reactions from "../Reactions/Reactions";
import DisplayReact from "../DisplayReact/DisplayReact";
import useLongPress from "../../../../hooks/useLongPress";

export const reacts = {
  "wow": [
    { id: 1, name: 'Snow', email: 'Jon', contact: 35, avatar: '/img/avatar/01.jpg' },
    { id: 2, name: 'Lannister', email: 'Cersei', contact: 42, avatar: '/img/avatar/02.jpg' },
    { id: 3, name: 'Lannister', email: 'Jaime', contact: 45, avatar: '/img/avatar/05.jpg' },
    { id: 4, name: 'Stark', email: 'Arya', contact: 16, avatar: '/img/avatar/06.jpg' },
    { id: 5, name: 'Targaryen', email: 'Daenerys', contact: null, avatar: '/img/avatar/07.jpg' },
  ],
  "like": [
    { id: 1, name: 'Snow', email: 'Jon', contact: 35, avatar: '/img/avatar/01.jpg' },
    { id: 2, name: 'Lannister', email: 'Cersei', contact: 42, avatar: '/img/avatar/02.jpg' },
    { id: 3, name: 'Lannister', email: 'Jaime', contact: 45, avatar: '/img/avatar/05.jpg' },
    { id: 4, name: 'Stark', email: 'Arya', contact: 16, avatar: '/img/avatar/06.jpg' },
    { id: 5, name: 'Targaryen', email: 'Daenerys', contact: null, avatar: '/img/avatar/07.jpg' },
  ],
}

const MessageFrom = ({
  type,
  data,
  index,
  isForward,
  handleCheckboxChange,
  handleViewProfile,
  handleLongPressReactionsList,
  handleToggleAction,
  ReactionsChatMain,
  activeReactionsIndex,
  like,
  love,
  care,
  funny,
  haha,
  wow,
  angry,
  sad,
  handleToggleModelCodeSnipest,
  handleOpenReplyMessage,
  handleToggleReactionsList,
  handleTogglePin,
  isPin,
  handleToggleStar,
  isStar,
  handleMessageCopy,
  HanldeCloseTemporay,
  activeIndex,
  reactionsRefList,
  isListActionMessage,
  showFullList,
  handleToggleFullList,
  handleToggleDeleteMessage,
  handleToggleMessageInfo,
  handleToggleReportMessage,
  handleForwardMessage,
  handleShowMessageOptions,
  activeMessageOptionsIndex
}) => {
  const onLongPress = () => {
    if (screen.width <= 768) {
      handleLongPressReactionsList(index)
      handleToggleAction(null)
    }
  };

  const handleClick = () => {
    if (screen.width <= 768) {
      handleToggleAction(index)
    }
  };

  const longPressEvent = useLongPress(onLongPress, 500);

  return (
    <div className={`wrap-message-select-from ${isForward ? "active-selected" : ""}`}>
      <ForwardMessage
        isForward={isForward}
        handleCheckboxChange={handleCheckboxChange}
        index={index}
      />
      <div className="message-from">
        {type != 'connection' && (
          <div className="user-img" onClick={handleViewProfile}>
            <img src={data.img} alt="" />
          </div>
        )}
        <div className="message flex-messages-from">
          <div className="wrap-message-contnet">
            {type != 'connection' && (
              <p className="name-message-sent" onClick={handleViewProfile}>Ahmed</p>
            )}
            {type == 'job' && (
              <p className="font-semibold mb-[4px]">Maketing Manger | Position</p>
            )}
            <div
              className="message message-Content-from"
            >
              <ListAction
                activeIndex={activeIndex}
                index={index}
                reactionsRefList={reactionsRefList}
                isListActionMessage={isListActionMessage}
                showFullList={showFullList}
                data={data}
                handleViewProfile={handleViewProfile}
                handleToggleFullList={handleToggleFullList}
                handleToggleDeleteMessage={handleToggleDeleteMessage}
                handleToggleMessageInfo={handleToggleMessageInfo}
                handleToggleReactionsList={handleToggleReactionsList}
                handleOpenReplyMessage={handleOpenReplyMessage}
                handleToggleReportMessage={handleToggleReportMessage}
                handleForwardMessage={handleForwardMessage}
                handleTogglePin={handleTogglePin}
                isPin={isPin}
                handleToggleStar={handleToggleStar}
                isStar={isStar}
                handleMessageCopy={handleMessageCopy}
                HanldeCloseTemporay={HanldeCloseTemporay}
              />
              <div
                className="icon-message-main-chat-to"
                onClick={() => handleToggleAction(index)}
              >
                <IoIosArrowDown />
              </div>
              <Reactions
                index={index}
                ReactionsChatMain={ReactionsChatMain}
                activeReactionsIndex={activeReactionsIndex}
                data={data}
                like={like}
                love={love}
                care={care}
                funny={funny}
                haha={haha}
                wow={wow}
                angry={angry}
                sad={sad}
              />
              <p className="max-w-[280px] md:max-w-[500px]"
                {...longPressEvent} onClick={handleClick}
              >{data.message}</p>
              { type == "community" && (
                <div className="display-react">
                  {Object.keys(reacts).map(react => <DisplayReact
                    data={data}
                    handleToggleModelCodeSnipest={handleToggleModelCodeSnipest}
                    like={like}
                    react={{ react: react, people: reacts[react] }}
                  />)
                  }
                </div>
              )}
              <div className={`message-options`}>
                <span className="text-[#adafca] hover:text-[#fd6729] cursor-pointer" onClick={() => handleToggleReactionsList(index)}>
                  <MdEmojiEmotions size={18} />
                </span>
                <span className="text-[#adafca] hover:text-[#fd6729] cursor-pointer" onClick={handleOpenReplyMessage}>
                  <FaReply size={18} />
                </span>
              </div>
            </div>
            <div className="wrap-time-stamp">
              <p className="time-stamp time-stamp-from">
                02:23 PM <FaCheckDouble />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageFrom;
