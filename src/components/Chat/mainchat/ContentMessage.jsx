import React, { useState, useRef, useEffect } from "react";
import { messages } from "../../../assests/data/messages";
import { FaEllipsisV, FaFlag, FaReply, FaShare } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { FaCheckDouble } from "react-icons/fa6";
import like from "../../../assests/chat/like.gif";
import love from "../../../assests/chat/love.gif";
import care from "../../../assests/chat/care.gif";
import haha from "../../../assests/chat/haha.gif";
import wow from "../../../assests/chat/wow.gif";
import sad from "../../../assests/chat/sad.gif";
import angry from "../../../assests/chat/angry.gif";
import { MdDelete } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegFolderOpen, FaCamera } from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { FaPlay, FaCloudUploadAlt } from "react-icons/fa";

import {
  selectGlobal,
  toggleForwardMessage,
  toggleModelMainChat,
  toggleReactPeopleInfo,
  toggleReplayMessage,
  toggleReport,
  toggleVideoStream,
} from "../../../app/feature/ListChatSlice";

const ContentMessage = () => {
  let stream;
  const data = [];
  const videoRef = useRef(null);
  const actionsRefList = useRef(null);
  const { isVideoStream, isProfile, isOpenChatList } =
    useSelector(selectGlobal);
  const shareScreen = async () => {
    if (navigator.mediaDevices.getDisplayMedia) {
      stream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: { cursort: "always" },
      });
      const mr = new MediaRecorder(stream);
      mr.ondataavailable = (chunk) => {
        data.push(chunk.data);
      };
      mr.start(1000);
      mr.stop = (c) => {
        const videoUrl = URL.createObjectURL(
          new Blob(data, { type: "video/mp4" })
        );
        videoRef.current.srcObject = videoUrl;
        alert(videoUrl);
      };
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      } else {
        console.error("Video element is not available.");
      }
    } else {
      console.error("getDisplayMedia is not supported.");
    }
  };
  const [isReactions, setIsReactions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexReact, setActiveIndexReact] = useState(null);
  const [actionIndex, setActionIndex] = useState(null);
  const reactionsRef = useRef(null);
  const reactionsRefList = useRef(null);

  const { isModelMainChat , isForward} = useSelector(selectGlobal);

  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isSelectForward, setSelectForward] = useState(false);

  const dispatch = useDispatch();
  const handleToggleModelChat = () => {
    dispatch(toggleModelMainChat());
  };
  const handleToggleReplayMessage = () => {
    dispatch(toggleReplayMessage());
  };
  const handleToggleVideoStream = () => {
    dispatch(toggleVideoStream());
  };
  const handleToggleReport = () => {
    dispatch(toggleReport());
  };

  const handleToggleModelCodeSnipest = () => {
    dispatch(toggleReactPeopleInfo());
  };

  
  const handleToggleForwardMessage = () => {
    dispatch(toggleForwardMessage());
  };

  const handleToggleCamera = () => {
    setIsFrontCamera(!isFrontCamera);
    setIsCameraOpen(!isCameraOpen);
  };


  const handleCheckboxChange = (messageId) => {
    setSelectForward(prevState => ({
      ...prevState,
      [messageId]: !prevState[messageId]
    }));
  };

  const [selectedFileImg, setSelectedFileImg] = useState(null);
  const handleToggleReact = (index) => {
    setActiveIndexReact(index);
    setIsReactions(!isReactions);
  };
  const handleToggleAction = (index) => {
    setActiveIndex(index);
    setActionIndex(!isReactions);
  };
  const handleFileChangeImg = (event) => {
    const file = event.target.files[0];
    setSelectedFileImg(file);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        reactionsRef.current &&
        !reactionsRef.current.contains(event.target) || (
          reactionsRefList.current &&
          !reactionsRefList.current.contains(event.target))) {
        setIsReactions(false);
        setActiveIndex(null);
        setActionIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [reactionsRef, setIsReactions, setActiveIndex]);

  return (
    <div className="ContentMessage">
      <div className="wrap-Message">
        <div className="date">
          <p>Monday, Apr 8, 2024</p>
        </div>
        <div className="messages">
          {messages.map((data, index) => (
            <div className={`${data.sendme?"wrap-messga-select-from ":`${isForward?"wrap-messga-select-to":"end"}`}
            ${isSelectForward[index]?"active-selected":""}`}>
              {isForward&&(
              <div className="selct-forward">
                <input type="checkbox" name="" id="" 
                onChange={()=>handleCheckboxChange(index)}/>
              </div>
              )}
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
                    <div
                      className={`message ${
                        data.sendme
                          ? "message-Content-from"
                          : "message-Content-to "
                      }`}
                    >
                      <p>{data.message}</p>
                      {data.liked && (
                        <div
                          className="display-react"
                          onClick={handleToggleModelCodeSnipest}
                        >
                          <div className="react">
                            <img src={like} alt="" />
                          </div>
                          <div className="count">1</div>
                        </div>
                      )}
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
                  {activeIndexReact === index && (
                    <div
                      ref={reactionsRef}
                      className={`reactions ${
                        data.sendme ? "react-from" : "react-to"
                      } ${
                        isReactions ? "reactions-active" : "reactions-disactive"
                      }`}
                    >
                      <div className="react">
                        <img src={like} alt="" />
                      </div>
                      <div className="react">
                        <img src={love} alt="" />
                      </div>
                      <div className="react">
                        <img src={care} alt="" />
                      </div>
                      <div className="react">
                        <img src={haha} alt="" />
                      </div>
                      <div className="react">
                        <img src={wow} alt="" />
                      </div>
                      <div className="react">
                        <img src={sad} alt="" />
                      </div>
                      <div className="react">
                        <img src={angry} alt="" />
                      </div>
                    </div>
                  )}
                  {activeIndex === index && (
                    <div
                      ref={reactionsRefList}
                      className={`list-user-action-message ${
                        actionIndex ? "active-chat" : "disactive-chat"
                      }`}
                    >
                      <div className="list">
                        {data.sendme ? (
                          ""
                        ) : (
                          <li>
                            <MdDelete /> Delete
                          </li>
                        )}
                        <li onClick={handleToggleReplayMessage}>
                          <FaReply /> Reply
                        </li>
                        <li onClick={handleToggleForwardMessage}>
                          <FaShare /> Forward
                        </li>
                        <li onClick={handleToggleReport}>
                          <FaFlag /> Report
                        </li>
                      </div>
                    </div>
                  )}
                  <div
                    className={`action-message-content ${
                      data.sendme
                        ? "action-message-content-from"
                        : "action-message-content-to"
                    }`}
                  >
                    <FaEllipsisV onClick={() => handleToggleAction(index)} />
                    <BsEmojiSmile onClick={() => handleToggleReact(index)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModelMainChat && (
        <div
          className={`model-chat 
        ${isVideoStream ? "disactive-chat" : ""} ${
            isProfile ? "disactive-chat-screen" : ""
          } ${isOpenChatList ? "disactive-chat-screen-chat" : ""}
        `}
        >
          <div className="wrap-model-chat">
            <div className="head-model-chat" onClick={handleToggleModelChat}>
              <IoMdCloseCircle />
            </div>
            <div className="content-model-chat">
              <p className="txt-model-head">
                Drop files here, paste,{" "}
                <a href="#">
                  browse files
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChangeImg}
                  />
                </a>{" "}
                or import from:
              </p>
              <div className="wrap-btn-model-chat">
                <div className="content-btn-model-chat">
                  <div className="icon-model-chat device">
                    <FaRegFolderOpen />
                  </div>
                  <div className="txt-btn-model-chat ">
                    <p>My Device</p>
                  </div>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChangeImg}
                  />
                </div>
                <div
                  className="content-btn-model-chat"
                  onClick={handleToggleCamera}
                >
                  <div className="icon-model-chat camera">
                    <FaCamera />
                  </div>
                  <div className="txt-btn-model-chat">
                    <p>camera</p>
                  </div>
                </div>
                <div
                  className="content-btn-model-chat"
                  onClick={() => {
                    shareScreen();
                    handleToggleVideoStream();
                  }}
                >
                  <div className="icon-model-chat screen">
                    <TbScreenShare />
                  </div>
                  <div className="txt-btn-model-chat">
                    <p>screencast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="share">
            <p>You can only upload images. Maximum file size is 2048MB</p>
          </div>
        </div>
      )}
      {isVideoStream && (
        <div className={`video-stream`}>
          <div>
            <video ref={videoRef} autoPlay controls />
          </div>
          <div className="footer-stream">
            <div
              className="icon-stream playy"
              onClick={() => {
                handleToggleVideoStream();
                let tracks = videoRef.current?.srcObject?.getTracks();
                if (tracks) {
                  tracks.forEach((T) => T.stop());
                  videoRef.current.srcObject = null;
                }
              }}
            >
              <FaPlay />
            </div>
            <div className="icon-stream upload">
              <FaCloudUploadAlt />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentMessage;

// useEffect(() => {
//   if (videoRef.current && isCameraOpen) {
//     navigator.mediaDevices
//       .getUserMedia({
//         video: {
//           facingMode: isFrontCamera ? "user" : "environment",
//         },
//       })
//       .then((stream) => {
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//       })
//       .catch((error) => {
//         console.error("Error accessing camera:", error);
//       });
//   }
// }, [isFrontCamera, isCameraOpen]);
