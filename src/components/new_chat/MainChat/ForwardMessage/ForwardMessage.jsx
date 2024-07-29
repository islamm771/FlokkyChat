import React from "react";

const ForwardMessage = ({ isForward, handleCheckboxChange , index}) => {
  return (
    <>
      {isForward && (
        <div className="selct-forward">
          <input
            type="checkbox"
            name=""
            id="checkedForwardMessage"
            onChange={() => handleCheckboxChange(index)}
          />
        </div>
      )}
    </>
  );
};

export default ForwardMessage;
