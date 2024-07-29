import React from "react";
import FormInputwithIcon from "../../../../components/ui/formInputWithSearchIcon/FormInputwithIcon";

const SearchChat = ({ direction }) => {
  return (
    <div className={`SearchChat ${direction === "right" ? "reverse" : ""}`}>
      <div className="wrapSearch_ResultChat">
        <div className="Search-people-chat">
          <FormInputwithIcon
            name={"Search-People"}
            id={"Search-People"}
            label={"Search Chats"}
          />
          <div style={{ marginBottom: "5px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SearchChat;
