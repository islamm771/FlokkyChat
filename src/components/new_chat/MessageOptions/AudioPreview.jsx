import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCreateMessageOptions } from "../../../app/feature/ListChatSlice";

const AudioPreview = ({ audio, setAudio }) => {
  const dispatch = useDispatch();

  return (
    <div className="images-preview w-full md:w-[600px] mx-auto mt-[1.5rem]">
      
      <div className="post-option-header">
        <h3 className="post-option-header-title">Upload Audio</h3>
        <button
          className="post-option-cancel-btn"
          onClick={() => {
            setAudio(null);
            dispatch(setCreateMessageOptions("normal"))
          }}
        >
          <MdClose />
        </button>
      </div>

      <div className="progress-stat-bar"
          style={{
            width: "100%",
            height: "4px",
            position: "relative",
            marginBottom:22,
            paddingRight:35
          }}
        >
          <div className="bar"
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
      
      <div className="img-preview-container">
        <p>{audio.name}</p>
      </div>
    </div>
  );
};

export default AudioPreview;
