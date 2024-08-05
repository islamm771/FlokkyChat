import { IoArrowBack } from "react-icons/io5";
import camera from "../../assests/chat/cam.svg";
import video from "../../assests/chat/video.svg";
import poll from "../../assests/chat/poll.svg";
import bg from "../../assests/chat/bg.svg";
import gif from "../../assests/chat/gificon.svg";
import sellProduct from "../../assests/chat/pub-product.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGlobal,
  setCreateMessageOptions,
  toggleContacts,
  toggleCreateMessageOptionsModel,
  toggleSellProducts
} from "../../app/feature/ListChatSlice";
import { GrServices } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { useState } from "react";
import CreatePoll from "./MessageOptions/CreatePoll";

import "./CreateMessage.css"
import ImagesPreview from "./MessageOptions/ImagePreview";
import VideoPreview from "./MessageOptions/VideoPreview";
import GifPreview from "./MessageOptions/GifPreview";
import AudioPreview from "./MessageOptions/AudioPreview";

const CreateMessageOptions = () => {
  const dispatch = useDispatch();
  const {createMessageOptions} = useSelector(selectGlobal)
  const [text, setText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [selectedAudio , setSelectedAudio] = useState(null)
  const [postPullOptions, setPostPullOptions] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
  const [selectedGif, setSelectedGif] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    const lines = value.split('\n');

    // Allow input only if lines are 5 or less
    if (lines.length <= 5) {
      setText(value);
    } else {
      // If lines exceed 5, limit the text to the first 5 lines
      setText(lines.slice(0, 5).join('\n'));
    }
  };
  const { isCreateMessageOptionsModel } = useSelector(selectGlobal);
  const handleToggleOpenMessageOptionModel = () => {
    dispatch(toggleCreateMessageOptionsModel());
  };
  const handleToggleContacts = () => {
    dispatch(toggleContacts());
  };

  const handleToggleSellProduct = () => {
    dispatch(toggleSellProducts());
  };

  return (
    <div
      className={`OverLay_createMessageOptions ${
        isCreateMessageOptionsModel
          ? "OverLay_createMessageOptionsActive"
          : "OverLay_createMessageOptionsDisActive"
      }`}
    >
      <div className="createMessageModel">
        <div className="header-createMessageModel !justify-between mb-[15px] md:!justify-start md:mb-0">
          <IoArrowBack onClick={handleToggleOpenMessageOptionModel} />
          <button className="w-fit bg-[#fd6729] text-white py-[5px] px-[15px] block md:hidden">Send Message</button>
        </div>
        <div className="content-write-message">
          <div className="img-writer-message">
            <img src="/img/avatar/01.jpg" alt="" />
          </div>
          <div className="content-write-message-txtaria">
            <textarea
              name=""
              id=""
              placeholder="What's going on? #Hashtag.. @Mention.. Link.."
              rows="6"
              value={text}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="content-buttons-options-message">

        { createMessageOptions == "image" && <ImagesPreview 
            images={selectedImages}
            setImages={setSelectedImages} /> }

        { createMessageOptions == "video" && <VideoPreview 
            videos={selectedVideos}
            setVideos={setSelectedVideos} /> }

        { createMessageOptions == "gif" && <GifPreview 
            selectedGif={selectedGif}
            setSelectedGif={setSelectedGif} /> }

        { createMessageOptions == "audio" && <AudioPreview 
          audio={selectedAudio}
          setAudio={setSelectedAudio}/> }

          <div className="images-actions-main-chat-message">
            <div className="icons-actions-main-chat icons-actions-main-chat-camera flex-icons-action-chat">
              <div className="box-camera-chat w-important-message-chat">
                <input
                  type="file"
                  multiple
                  accept="image/x-png, image/gif, image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedImages(e.target.files);
                      dispatch(setCreateMessageOptions("image"));
                    } else {
                      dispatch(setCreateMessageOptions("normal"))
                    }
                  }}
                />
                <div className="wrapp-img-create-message">
                  <img src={camera} alt="" />
                </div>
              </div>
              <div className="text-icons-actions-camera-message">
                <p>Upload Images</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-poll flex-icons-action-chat"
            onClick={() => dispatch(setCreateMessageOptions("poll"))}
            >
              <div className="wrapp-img-create-message">
                <img src={poll} alt="" />
              </div>
              <div className="text-icons-actions-poll-message">
                <p>Create Poll</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-video flex-icons-action-chat">
              <div className="box-camera-chat w-important-message-chat">
                <input type="file"
                accept="video/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setSelectedVideos(e.target.files);
                    dispatch(setCreateMessageOptions("video"))
                  } else {
                    dispatch(setCreateMessageOptions("normal"))
                  }
                }}
                />
                <div className="wrapp-img-create-message">
                  <img src={video} alt="" />
                </div>
              </div>
              <div className="text-icons-actions-video-message">
                <p>Upload Video</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-bg flex-icons-action-chat">
              <div className="wrapp-img-create-message bg-message-special-chat">
                <img src={bg} alt="" />
              </div>
              <div className="text-icons-actions-bg-meassage">
                <p>Background</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-gif flex-icons-action-chat"
            onClick={() => dispatch(setCreateMessageOptions("gif"))}>
              <div className="wrapp-img-create-message bg-message-special-chat">
                <img src={gif} alt="" />
              </div>
              <div className="text-icons-actions-gif-message">
                <p>GIF</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-mic flex-icons-action-chat">
              <div className="wrapp-img-create-message bg-message-special-chat">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="feather feather-mic"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <div className="text-icons-actions-mic-meassage">
                <p>Record Voice</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-mic flex-icons-action-chat" onClick={handleToggleSellProduct}>
              <div className="wrapp-img-create-message bg-message-special-chat">
                <img src={sellProduct} alt="" />
              </div>
              <div className="text-icons-actions-mic-meassage">
                <p>Sell product</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-mic flex-icons-action-chat">
              <div className="wrapp-img-create-message bg-message-special-chat">
                <GrServices />
              </div>
              <div className="text-icons-actions-mic-meassage">
                <p>Add Services</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-mic flex-icons-action-chat" onClick={handleToggleContacts}>
              <div className="wrapp-img-create-message bg-message-special-chat">
                <IoMdContacts />
              </div>
              <div className="text-icons-actions-mic-meassage">
                <p>Contacts</p>
              </div>
            </div>
            <div className="icons-actions-main-chat icons-actions-main-chat-audio flex-icons-action-chat">
              <div className="box-camera-chat w-important-message-chat">
                <input 
                type="file" 
                accept="audio/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setSelectedAudio(e.target.files[0]);
                    dispatch(setCreateMessageOptions("audio"))
                  } else {
                    dispatch(setCreateMessageOptions("normal"))
                  }
                }}/>
                <div className="wrapp-img-create-message bg-message-special-chat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="feather feather-mic"
                  >
                    <path
                      fill="#3f51b5"
                      d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="text-icons-actions-audio-message">
                <p>Audio Upload</p>
              </div>
            </div>
          </div>


          { createMessageOptions == "poll" && <CreatePoll 
            postPullOptions={postPullOptions} 
            setPostPullOptions={setPostPullOptions} /> }
        </div>
        <div className="!hidden md:!flex send-message-content">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default CreateMessageOptions;
