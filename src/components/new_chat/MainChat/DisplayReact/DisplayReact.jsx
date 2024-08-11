import { Link } from "react-router-dom";
import UserProfileImage from "../../../user-profile-image/UserProfileImage";
import { useEffect, useRef, useState } from "react";

const DisplayReact = ({ data, handleToggleModelCodeSnipest, like, react }) => {
  const [isReactionListOpen, setIsReactionListOpen] = useState(false);
  const reactListRef = useRef()

  const imgSrc = react?.react == "like" ? "/img/reaction/like.png"
    : react?.react == "wow" ? "/img/reaction/wow.png"
      : react?.react == "love" ? "/img/reaction/love.png" : "/img/reaction/happy.png"

  useEffect(() => {
    const handleCLickOutside = (e) => {
      if (reactListRef.current && !reactListRef.current.contains(e.target)) {
        setIsReactionListOpen(false)
      }
    }

    document.addEventListener("mousedown", handleCLickOutside)

    return () => {
      document.removeEventListener("mousedown", handleCLickOutside)
    }
  }, [isReactionListOpen])

  console.log(react)
  return (
    <>
      {data.liked && (
        <div className="flex items-center"
          ref={reactListRef}
          onClick={() => { setIsReactionListOpen(prev => !prev) }}>
          <div className="react">
            <img src={imgSrc} alt="" />
          </div>
          <div className="count">{react?.people.length}</div>

          <div
            className={`simple-dropdown padded reaction-item-dropdown !w-[270px] absolute top-[30px] ${data.sendme ? "left-0" : "right-0"} z-[9999] transition-all duration-[0.5s]`}
            style={{
              opacity: isReactionListOpen ? 1 : 0,
              visibility: isReactionListOpen ? "visible" : "hidden",
              transform: isReactionListOpen ? "translateY(0px)" : "translateY(-20px)"
            }}
          >
            <p className="simple-dropdown-text mb-[15px]">
              <img
                className="reaction"
                src={imgSrc}
                alt="reaction-wow"
              />
              <p className="reactions-number !text-[#3e3f5e]">5</p>
              <span className="bold !text-[#3e3f5e]">{react?.react}</span>
            </p>

            <div className="wrap-new-chat !max-h-[250px] !mt-0 pr-[15px]">
              {react?.people.map(person => (
                <p className="simple-dropdown-text pl-[12px] mb-[10px]" key={person.id}>
                  <div className="user-status">
                    <Link
                      className="user-status-avatar"
                      to="/user-profile-page"
                    >
                      <UserProfileImage src={person.avatar} />
                    </Link>

                    <p className="user-status-title">
                      <span className="bold">{person.name} </span>
                    </p>

                    <p
                      className="user-status-text small"
                      style={{ color: "#adafca" }}
                    >
                      Marketing Manager - Brandmarks
                    </p>
                  </div>
                </p>
              ))}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayReact;
