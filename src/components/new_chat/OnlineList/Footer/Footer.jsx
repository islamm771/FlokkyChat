import { FaPause } from "react-icons/fa";
import { FaCirclePlay, FaSliders, FaVolumeLow } from "react-icons/fa6";

const Footer = ({
  radio,
  handleTogglePlay,
  isPlay,
  handleToggleOnlineListMusic,
  list_music,
  onlineListMusic,
}) => {
  return (
    <footer>
      <div className="footer-online-list">
        <div className="wrap-music-online-list">
          <div className="right-music-wrap-music-online-list">
            <div className="img">
              <img src={radio} alt="" />
            </div>
            <div className="play" onClick={handleTogglePlay}>
              {isPlay ? <FaPause /> : <FaCirclePlay />}
            </div>
            <div className="info-music-wrap-music-online-list">
              <p className="name">Dash Hits X</p>
              <p className="desc-music">Dash Hits X gives you the big..</p>
            </div>
          </div>
          <div className="left-music" onClick={handleToggleOnlineListMusic}>
            <FaSliders />
          </div>
        </div>
        <div
          ref={list_music}
          className={`list-music ${
            onlineListMusic ? "active-list-music" : "disactive-list-music"
          }`}
        >
          <p className="head">Radio Station List</p>
          <div className="list">
            <p>Dash Hits X</p>
            <p>Dash Hits X</p>
            <p>Dash Hits X</p>
            <p>Dash Hits X</p>
            <div className="volume">
              <FaVolumeLow />
              <input type="range" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
