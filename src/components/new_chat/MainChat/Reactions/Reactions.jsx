import React from "react";

const Reactions = ({
  index,
  ReactionsChatMain,
  activeReactionsIndex,
  data,
  like,
  love,
  care,
  funny,
  haha,
  wow,
  angry,
  sad,
  
}) => {
  return (
    <>
      {" "}
      {activeReactionsIndex === index && (
        <div
          ref={ReactionsChatMain}
          className={`${
            data.sendme ? "reactions-chat-main-from" : "reactions-chat-main-to"
          }
        ${
          activeReactionsIndex >= 0
            ? "active-reactions-chat-main"
            : "disactive-reactions-chat-main"
        }`}
        >
          <div className="wrap-chat-main">
            <img src={like} alt="" loading="lazy" />
            <img src={love} alt="" loading="lazy" />
            <img src={care} alt="" loading="lazy" />
            <img src={funny} alt="" loading="lazy" />
            <img src={haha} alt="" loading="lazy" />
            <img src={wow} alt="" loading="lazy" />
            <img src={angry} alt="" loading="lazy" />
            <img src={sad} alt="" loading="lazy" />
          </div>
        </div>
      )}
    </>
  );
};

export default Reactions;
