import { useDispatch, useSelector } from "react-redux";
import { FalseDeleteMessage, selectGlobal, toggleDeleteMessage } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";

const DeleteMessage = () => {
  const DeleteMessageRef = useRef(null);
  const { isDeleteMessageModel, deleteMessageData } = useSelector(selectGlobal);
  const dispatch = useDispatch();

  const handleToggleDeleteMessage = () => {
    dispatch(toggleDeleteMessage());
  };

  useEffect(() => {
    const handleClickOutsideReactions = (event) => {
      if (DeleteMessageRef.current && !DeleteMessageRef.current.contains(event.target)) {
        dispatch(FalseDeleteMessage());
      }
    };

    document.addEventListener("mousedown", handleClickOutsideReactions);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideReactions);
    };
  }, [DeleteMessageRef, dispatch]);

  return (
    <div className={`Overlay-Delete ${isDeleteMessageModel ? "Overlay-DeleteActive" : "Overlay-DeleteDisActive"}`}>
      <div ref={DeleteMessageRef} className="DeleteModel">
        <div className="headerDeleteMessage">
          <p>Delete message?</p>
        </div>
        {deleteMessageData !== false ? (
          <div className="content-DeleteMessage">
            <div className="Cancel">
              <button className="Cancel_deleteMessage" onClick={handleToggleDeleteMessage}>Cancel</button>
              <button className="DeleteForMe_deleteMessage">Delete for me</button>
            </div>
          </div>
        ) : (
            <div className="content-DeleteMessage-to">
            <div className="Cancel-to">
              <button className="DeleteForMe_deleteMessage">Delete for everyone </button>
              <button className="DeleteForMe_deleteMessage">Delete for me</button>
              <button className="Cancel_deleteMessage" onClick={handleToggleDeleteMessage}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteMessage;
