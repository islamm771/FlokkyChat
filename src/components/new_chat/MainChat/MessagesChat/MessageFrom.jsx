import { IoIosArrowDown } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { FaReply, FaCheckDouble } from "react-icons/fa";
import ForwardMessage from "../ForwardMessage/ForwardMessage";
import ListAction from "../ListAction/ListAction";
import Reactions from "../Reactions/Reactions";
import DisplayReact from "../DisplayReact/DisplayReact";
import useLongPress from "../../../../hooks/useLongPress";

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
}) =>{ 
  const onLongPress = () => {
    if(screen.width <= 768){
      handleLongPressReactionsList(index)
      handleToggleAction(null)
    }
  };
  
  const handleClick = () => {
    if(screen.width <= 768){
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
      { type != 'connection' && (
        <div className="img" onClick={handleViewProfile}>
          <img src={data.img} alt="" />
        </div>
      )  }
      <div className="message flex-messages-from">
        <div className="wrap-message-contnet">
          <p className="name-message-sent">Ahmed</p>
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
            <DisplayReact
              data={data}
              handleToggleModelCodeSnipest={handleToggleModelCodeSnipest}
              like={like}
            />
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
);}

export default MessageFrom;
