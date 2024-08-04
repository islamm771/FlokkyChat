import { FaCheckDouble } from "react-icons/fa";
import DisplayReact from "../DisplayReact/DisplayReact";
import Reactions from "../Reactions/Reactions";
import { IoIosArrowDown } from "react-icons/io";
import ListAction from "../ListAction/ListAction";
import ForwardMessage from "../ForwardMessage/ForwardMessage";
import { messages as messageMap } from "../../../../assests/data/messages";
import PinMessage from "../PinMessage/PinMessage";
import { MdEmojiEmotions } from "react-icons/md";
import { FaReply } from "react-icons/fa6";
import { useState } from "react";
import MessageFrom from "./MessageFrom";
import MessageTo from "./MessageTo";

const UserMessages = ({
	isPinMessage,
	PinMessageTop,
	isPinMessageTop,
	handleTogglePinMessage,
	handleTogglePinMessageTop,
	isForward,
	isSelectForward,
	handleCheckboxChange,
	activeIndex,
	reactionsRefList,
	isListActionMessage,
	showFullList,
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
	handleLongPressReactionsList,
	handleTouchEnd,
	clearLongPress,
}) => {
	const [activeMessageOptionsIndex, setActiveMessageOptionsIndex] = useState(null);
	// const [showMessageOptions, setShowMessageOptions] = useState(false)
	const handleShowMessageOptions = (index) => {
		setActiveMessageOptionsIndex( activeMessageOptionsIndex == index ? null : index  )
	}
	return (
		<>
			<div className="wrap-Message">
				<PinMessage
					isPinMessage={isPinMessage}
					PinMessageTop={PinMessageTop}
					isPinMessageTop={isPinMessageTop}
					handleTogglePinMessage={handleTogglePinMessage}
					handleTogglePinMessageTop={handleTogglePinMessageTop}
				/>
				<div className="date">
					<p>Monday, Apr 8, 2024</p>
				</div>
				<div className="messages">
					{messageMap.map((data, index) => (
					data.sendme ? (
						<MessageFrom
						type={"connection"}
						key={index}
						data={data}
						index={index}
						isForward={isForward}
						handleCheckboxChange={handleCheckboxChange}
						handleViewProfile={handleViewProfile}
						handleLongPressReactionsList={handleLongPressReactionsList}
						handleToggleAction={handleToggleAction}
						ReactionsChatMain={ReactionsChatMain}
						activeReactionsIndex={activeReactionsIndex}
						like={like}
						love={love}
						care={care}
						funny={funny}
						haha={haha}
						wow={wow}
						angry={angry}
						sad={sad}
						handleToggleModelCodeSnipest={handleToggleModelCodeSnipest}
						handleOpenReplyMessage={handleOpenReplyMessage}
						handleToggleReactionsList={handleToggleReactionsList}
						handleTogglePin={handleTogglePin}
						isPin={isPin}
						handleToggleStar={handleToggleStar}
						isStar={isStar}
						handleMessageCopy={handleMessageCopy}
						HanldeCloseTemporay={HanldeCloseTemporay}
						activeIndex={activeIndex}
						reactionsRefList={reactionsRefList}
						isListActionMessage={isListActionMessage}
						showFullList={showFullList}
						handleToggleFullList={handleToggleFullList}
						handleToggleDeleteMessage={handleToggleDeleteMessage}
						handleToggleMessageInfo={handleToggleMessageInfo}
						handleToggleReportMessage={handleToggleReportMessage}
						handleForwardMessage={handleForwardMessage}
						handleShowMessageOptions={handleShowMessageOptions}
						activeMessageOptionsIndex={activeMessageOptionsIndex}
						/>
					) : (
						<MessageTo
						key={index}
						data={data}
						index={index}
						isForward={isForward}
						handleCheckboxChange={handleCheckboxChange}
						handleLongPressReactionsList={handleLongPressReactionsList}
						handleToggleAction={handleToggleAction}
						ReactionsChatMain={ReactionsChatMain}
						activeReactionsIndex={activeReactionsIndex}
						like={like}
						love={love}
						care={care}
						funny={funny}
						haha={haha}
						wow={wow}
						angry={angry}
						sad={sad}
						handleToggleModelCodeSnipest={handleToggleModelCodeSnipest}
						handleOpenReplyMessage={handleOpenReplyMessage}
						handleToggleReactionsList={handleToggleReactionsList}
						handleTogglePin={handleTogglePin}
						isPin={isPin}
						handleToggleStar={handleToggleStar}
						isStar={isStar}
						handleMessageCopy={handleMessageCopy}
						HanldeCloseTemporay={HanldeCloseTemporay}
						activeIndex={activeIndex}
						reactionsRefList={reactionsRefList}
						isListActionMessage={isListActionMessage}
						showFullList={showFullList}
						handleToggleFullList={handleToggleFullList}
						handleToggleDeleteMessage={handleToggleDeleteMessage}
						handleToggleMessageInfo={handleToggleMessageInfo}
						handleToggleReportMessage={handleToggleReportMessage}
						handleForwardMessage={handleForwardMessage}
						handleShowMessageOptions={handleShowMessageOptions}
						activeMessageOptionsIndex={activeMessageOptionsIndex}
						/>
					)
					))}
				</div>
			</div>
		</>
	);
};

export default UserMessages;
