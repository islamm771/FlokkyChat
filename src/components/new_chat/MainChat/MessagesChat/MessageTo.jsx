import { IoIosArrowDown } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { FaReply, FaCheckDouble } from "react-icons/fa";
import ForwardMessage from "../ForwardMessage/ForwardMessage";
import ListAction from "../ListAction/ListAction";
import Reactions from "../Reactions/Reactions";
import DisplayReact from "../DisplayReact/DisplayReact";
import useLongPress from "../../../../hooks/useLongPress";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../../../app/feature/ListChatSlice";

export const reacts = {
  "like": [
    { id: 1, name: 'Snow', email: 'Jon', contact: 35, avatar: '/img/avatar/01.jpg' },
    { id: 2, name: 'Lannister', email: 'Cersei', contact: 42, avatar: '/img/avatar/02.jpg' },
    { id: 3, name: 'Lannister', email: 'Jaime', contact: 45, avatar: '/img/avatar/05.jpg' },
    { id: 4, name: 'Stark', email: 'Arya', contact: 16, avatar: '/img/avatar/06.jpg' },
    { id: 5, name: 'Targaryen', email: 'Daenerys', contact: null, avatar: '/img/avatar/07.jpg' },
  ],
}

const MessageTo = ({
  type,
  data,
  index,
  isForward,
  handleCheckboxChange,
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
  const {messageColor} = useSelector(selectGlobal)
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
    (
      <div className={`wrap-message-select-to ${isForward ? "active-selected" : ""}`}>
        <ForwardMessage
          isForward={isForward}
          handleCheckboxChange={handleCheckboxChange}
          index={index}
        />
        <div className="message-to">
          <div className="message flex-messages-to">
            <div className="wrap-message-contnet">
              <div className="message message-Content-to" style={{backgroundColor:messageColor}}>
                <ListAction
                  activeIndex={activeIndex}
                  index={index}
                  reactionsRefList={reactionsRefList}
                  isListActionMessage={isListActionMessage}
                  showFullList={showFullList}
                  data={data}
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
                  className="icon-message-main-chat-from"
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
                {type == "community" && data.liked && (
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
                <div className={`message-options left`}>
                  <span className="text-[#adafca] hover:text-[#fd6729] cursor-pointer" onClick={() => handleToggleReactionsList(index)}>
                    <MdEmojiEmotions size={18} />
                  </span>
                  <span className="text-[#adafca] hover:text-[#fd6729] cursor-pointer" onClick={handleOpenReplyMessage}>
                    <FaReply size={18} />
                  </span>
                </div>
              </div>
              <div className="wrap-time-stamp">
                <p className="time-stamp time-stamp-to">
                  02:23 PM <FaCheckDouble />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default MessageTo;
