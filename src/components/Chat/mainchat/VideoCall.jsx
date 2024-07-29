import React, { useRef, useState } from "react";
import {
  FaArrowsAltV,
  FaExpand,
  FaMicrophoneAltSlash,
  FaPhoneSlash,
  FaVideo,
  FaVideoSlash,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  selectGlobal,
  toggleVideoCall,
} from "../../../app/feature/ListChatSlice";
import { useDispatch } from "react-redux";

const VideoCall = () => {
  const [isheight, setIsHeight] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const { isVideoCall } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const handleToggleHeight = () => {
    setIsHeight(!isheight);
  };

  const handleToggleVideoCall = () => {
    dispatch(toggleVideoCall());
    setIsHeight(false);
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
        videoRef.current.srcObject = null;
        setIsCameraEnabled(false);
      }
    }
  };

  const handleToggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleToggleCamera = async () => {
    if (!isCameraEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        videoRef.current.srcObject = stream;
        setIsCameraEnabled(true);
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    } else {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
        videoRef.current.srcObject = null;
        setIsCameraEnabled(false);
      }
    }
  };

  return (
    <div
      className={`video-call ${
        isVideoCall ? "active-chat" : "disactive-chat"
      } ${isheight ? "height" : ""}`}
    >
      <div className="call-msg">Calling Ahmed...</div>
      <div className="media-div">
        <div className="local-video">
          <div className="video-caller-name">You</div>
          <video ref={videoRef} autoPlay className="video-element" />
        </div>
      </div>
      <div className="call-controllers">
        <div
          className="icon-video-call slash phone"
          onClick={handleToggleVideoCall}
        >
          <FaPhoneSlash />
        </div>
        <div
          className="icon-video-call slash bg-gray"
          onClick={handleToggleCamera}
        >
          {isCameraEnabled ? <FaVideo /> : <FaVideoSlash />}
        </div>
        <div className="icon-video-call slash bg-gray">
          <FaMicrophoneAltSlash />
        </div>
        <div
          className="icon-video-call normal-icon bg-gray"
          onClick={handleToggleHeight}
        >
          <FaArrowsAltV />
        </div>
        <div
          className="icon-video-call normal-icon bg-gray"
          onClick={handleToggleFullScreen}
        >
          <FaExpand />
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
