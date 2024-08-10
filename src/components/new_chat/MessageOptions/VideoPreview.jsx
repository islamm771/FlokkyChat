import { useState } from "react";
import { FaSortDown } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCreateMessageOptions } from "../../../app/feature/ListChatSlice";

const VideoPreview = ({ videos, setVideos }) => {
  const dispatch = useDispatch();
  const [isThumbVisible,setIsThumbVisible] = useState(false)
  const videosArray = Array.from(videos);
  const [img , setImg] = useState('')

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="video-section w-full md:w-[600px] mx-auto mt-[1.5rem]">
      <div className="post-option-header">
        <h3 className="post-option-header-title">Upload Video</h3>

        <button className="ml-auto mr-[20px] w-fit text-[#3e3f5e] flex gap-[5px]"
        onClick={ () => setIsThumbVisible( prev => !prev ) }
        >
          Custom Thumbnail <FaSortDown /> 
        </button>

        <button
          className="post-option-cancel-btn"
          onClick={() => {
            setVideos([]);
            dispatch(setCreateMessageOptions("normal"))
          }}
        >
          <MdClose />
        </button>
      </div>

      <div
          className="progress-stat-bar"
          style={{
            width: "100%",
            height: "4px",
            position: "relative",
            marginBottom:22,
            paddingRight:35
          }}
        >
          <div
            className="bar"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ddd",
            }}
          ></div>
          <div
            className="colored-bar"
            style={{
              width: `50%`,
              height: "100%",
              position: "absolute",
              top: 0,
              background: "linear-gradient(90deg, #fd6729, orange)",
            }}
          ></div>

          <p className="absolute top-[-5px] right-0 text-[14px]">50%</p>
      </div>

      <div className="video-content">
        {videosArray[0]?.name}
      </div>

      {
        isThumbVisible && 
        <div className="upload-video-thumbnail">
            <label htmlFor="video-thumb">
              {!img && 'Upload Image' }
            </label>
            <input id="video-thumb" type="file" accept="image/*" onChange={handleInputChange} />
            {img && <img src={img} alt="Thumbnail" />}
        </div>
      }

      
    </div>
  );
};

export default VideoPreview;