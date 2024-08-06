import { Link } from "react-router-dom";
import UserProfileImage from "../../../user-profile-image/UserProfileImage";
import { useEffect, useRef, useState } from "react";

const DisplayReact = ({ data, handleToggleModelCodeSnipest, like }) => {
	const [isReactionListOpen, setIsReactionListOpen] = useState(false);
  const reactListRef = useRef()

  useEffect(() => {
    const handleCLickOutside = (e) => {
      if(reactListRef.current && !reactListRef.current.contains(e.target)){
        setIsReactionListOpen(false)
      }
    }

    document.addEventListener("mousedown" , handleCLickOutside)
    
    return () => {
      document.removeEventListener("mousedown" , handleCLickOutside)
    }
}, [isReactionListOpen])
  

  return (
    <>
      {data.liked && (
        <div className="display-react" 
        ref={reactListRef}
        onClick={() => {setIsReactionListOpen(prev => !prev)}}>
          <div className="react">
            <img src={like} alt="" />
          </div>
          <div className="count">1</div>

          <div
            className={`simple-dropdown padded reaction-item-dropdown !w-[270px] absolute top-[30px] ${ data.sendme ? "left-0" : "right-0" } z-[9999] transition-all duration-[0.5s]`}
            style={{
              opacity : isReactionListOpen ?  1 : 0,
              visibility : isReactionListOpen ? "visible" : "hidden",
              transform : isReactionListOpen ? "translateY(0px)" : "translateY(-20px)"
            }}
          >
            <p className="simple-dropdown-text">
              <img
                className="reaction"
                src={like}
                alt="reaction-wow"
              />
              <p className="reactions-number !text-[#3e3f5e]">5</p>
              <span className="bold !text-[#3e3f5e]">Like</span>
            </p>

            <div className="wrap-new-chat !max-h-[250px] !mt-0 py-[10px] pr-[15px]">
              <p className="simple-dropdown-text pl-[12px]">
                <div className="user-status">
                  <Link
                    className="user-status-avatar"
                    to="/user-profile-page"
                  >
                    <UserProfileImage />
                  </Link>

                  <p className="user-status-title">
                    <span className="bold">Neko Bebop </span>
                  </p>

                  <p
                    className="user-status-text small"
                    style={{ color: "#adafca" }}
                  >
                    Marketing Manager - Brandmarks
                  </p>
                </div>
              </p>
              <p className="simple-dropdown-text !mt-[20px] pl-[12px]">
                <div className="user-status">
                  <Link
                    className="user-status-avatar"
                    to="/user-profile-page"
                  >
                    <UserProfileImage />
                  </Link>

                  <p className="user-status-title">
                    <span className="bold">Neko Bebop </span>
                  </p>

                  <p
                    className="user-status-text small"
                    style={{ color: "#adafca" }}
                  >
                    Marketing Manager - Brandmarks
                  </p>
                </div>
              </p>
              <p className="simple-dropdown-text !mt-[20px] pl-[12px]">
                <div className="user-status">
                  <Link
                    className="user-status-avatar"
                    to="/user-profile-page"
                  >
                    <UserProfileImage />
                  </Link>

                  <p className="user-status-title">
                    <span className="bold">Neko Bebop </span>
                  </p>

                  <p
                    className="user-status-text small"
                    style={{ color: "#adafca" }}
                  >
                    Marketing Manager - Brandmarks
                  </p>
                </div>
              </p>
              <p className="simple-dropdown-text !mt-[20px] pl-[12px]">
                <div className="user-status">
                  <Link
                    className="user-status-avatar"
                    to="/user-profile-page"
                  >
                    <UserProfileImage />
                  </Link>

                  <p className="user-status-title">
                    <span className="bold">Neko Bebop </span>
                  </p>

                  <p
                    className="user-status-text small"
                    style={{ color: "#adafca" }}
                  >
                    Marketing Manager - Brandmarks
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayReact;
