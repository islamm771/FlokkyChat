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

const Messages = ({
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
						<div
							key={index}
							className={`${
								data.sendme
									? "wrap-message-select-from"
									: isForward
									? "wrap-message-select-to-between"
									: "wrap-message-select-to-end"
									}
								${isSelectForward[index] ? `${isForward ? "active-selected" : ""}` : ""}`} >
							<ForwardMessage
								isForward={isForward}
								handleCheckboxChange={handleCheckboxChange}
								index={index}
							/>
							<div
								className={`${data.sendme ? "message-from" : "message-to"}`}
								key={index}
							>
								<div className="img">
									<img src={data.img} alt="" />
								</div>
								<div
									className={`message ${
										data.sendme ? "flex-messages-from" : "flex-messages-to"
									}`}
								>
									<div className="wrap-message-contnet">
										{data.sendme && <p className="name-message-sent">Ahmed</p>}
										<div
											onTouchStart={() => handleLongPressReactionsList(index)}
											onTouchEnd={() => handleTouchEnd(index)}
											// onMouseDown={() => handleLongPressReactionsList(index)}
											// onMouseUp={() => handleTouchEnd(index)}
											className={`message ${
												data.sendme
													? "message-Content-from"
													: "message-Content-to "
											}`}
											onMouseEnter={ () => handleShowMessageOptions(index) }
											onMouseLeave={ () => handleShowMessageOptions(index) }
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
												className={`${
													data.sendme
														? "icon-message-main-chat-to"
														: "icon-message-main-chat-from"
												}`}
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
											<p>{data.message}</p>
											<DisplayReact
												data={data}
												handleToggleModelCodeSnipest={
													handleToggleModelCodeSnipest
												}
												like={like}
											/>
										</div>
										<div className="wrap-time-stamp">
											<p
												className={`time-stamp ${
													data.sendme ? "time-stamp-from" : "time-stamp-to"
												}`}
											>
												02:23 PM <FaCheckDouble />
											</p>
										</div>
									</div>
								</div>
								<div 
								className={` message-options flex items-center gap-1 transition-opacity duration-[0.5s]
									${ activeMessageOptionsIndex == index ? "opacity-100" : "opacity-0" }
									${data.sendme ? "mt-8" : "mt-[1rem]"}`}
								onMouseEnter={ () => handleShowMessageOptions(index) }
								onMouseLeave={ () => handleShowMessageOptions(index) }
								>
									<span className="text-[#adafca] hover:text-[#fd6729] cursor-pointer" 
									onClick={() => handleToggleReactionsList(index)}>
										<MdEmojiEmotions size={18} />
									</span>
									<span className="text-[#adafca] hover:text-[#fd6729] cursor-pointer" onClick={handleOpenReplyMessage}>
										<FaReply size={18} />
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Messages;
