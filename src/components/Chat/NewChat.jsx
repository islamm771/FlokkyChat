import { useDispatch, useSelector } from "react-redux";
import { NewChatFalse, toggleNewChat } from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef, useState } from "react";
import { FaPersonBooth } from "react-icons/fa";

const NewChat = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const dispatch = useDispatch();
  const { isNewChat } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null);

  const handleToggleChatList = () => {
    dispatch(toggleNewChat());
  };
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && !chatRoomRef.current.contains(event.target)) {
        dispatch(NewChatFalse());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <div className={`overlay ${isNewChat ? "active-chat" : "disactive-chat"} `}>
      <div ref={chatRoomRef} className={`new-chat`}>
        <div className="tab-new-chat">
          <ul>
            <li
              className={activeTab === 1 ? "active tabs-enter" : "tabs-exit"}
              onClick={() => handleTabClick(1)}
            >
              <FaPersonBooth /> General
            </li>
            <li
              className={activeTab === 2 ? "active tabs-enter" : "tabs-exit"}
              onClick={() => handleTabClick(2)}
            >
              <FaPersonBooth /> Advanced
            </li>
          </ul>
        </div>
        {activeTab === 1 && (
          <form>
            <div className="wrap-new-chat">
              <div className="header-Report">
                <h5>General Settings</h5>
              </div>
              <hr />
              <div className="wrap-inputs-Report">
                <div className="inpt-newchat">
                  <p>Name</p>
                  <input type="text" placeholder="Room Name" />
                </div>
                <div className="inpt-newchat">
                  <p>Description</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Room Description"
                  ></textarea>
                </div>
                <div className="inpt-newchat">
                  <p>Slug</p>
                  <input type="text" placeholder="Room Slug" />
                </div>
                <div className="inpt-newchat">
                  <div className="password-protect">
                    <p>Password Protect</p>
                    <label class="switch">
                      <input
                        type="checkbox"
                        checked={isPasswordProtected}
                        onChange={() =>
                          setIsPasswordProtected(!isPasswordProtected)
                        }
                      />{" "}
                      <span class="slider"></span>
                    </label>
                  </div>
                  {isPasswordProtected && (
                    <div className="pin">
                      <input type="text" placeholder="Pin" />
                    </div>
                  )}
                </div>
                <div className="inpt-newchat">
                  <div className="password-protect">
                    <p>Visible to everyone</p>
                    <label class="switch visible-every-one">
                      <input type="checkbox" />
                      <span class="slider"></span>
                    </label>
                  </div>
                </div>
                {!isPasswordProtected && (
                  <div className="inpt-newchat">
                    <div className="password-protect">
                      <p>Allow Public View</p>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                      </label>
                    </div>
                  </div>
                )}
                <div className="inpt-newchat">
                  <div className="password-protect">
                    <p>Allow Guest Chats</p>
                    <label class="switch allow-guest">
                      <input type="checkbox" />
                      <span class="slider"></span>
                    </label>
                  </div>
                </div>
                <hr />
                <div className="inpt-newchat">
                  <p>Auto join users to this room on the first visit</p>
                  <select name="" id="">
                    <option value="">Global Setting</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
                <div className="inpt-newchat">
                  <p>Cover Image</p>
                  <input type="file" style={{ border: "none" }} />
                </div>
                <div className="inpt-newchat">
                  <p>Status</p>
                  <select name="" id="">
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="btn-newChat">
              <button
                type="button"
                onClick={handleToggleChatList}
                className="closeReport"
              >
                Close
              </button>
              <button className="SubmitReport">Submit Report</button>
            </div>
          </form>
        )}
        {activeTab === 2 && (
          <form>
            <div className="wrap-new-chat">
              <div className="header-Report">
                <h5>Advanced Settings</h5>
              </div>
              <hr />
              <div className="wrap-inputs-Report">
                <div className="inpt-newchat">
                  <p>Notice message</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Room Description"
                  ></textarea>
                </div>
                <div className="inpt-newchat">
                  <p>Notice style</p>
                  <select name="" id="">
                    <option value="">Dark</option>
                    <option value="">YeSuccesss</option>
                    <option value="">Warning</option>
                  </select>
                </div>
                <div className="inpt-newchat">
                  <div className="password-protect">
                    <p>Show Background</p>
                    <label class="switch">
                      <input
                        type="checkbox"
                        checked={isPasswordProtected}
                        onChange={() =>
                          setIsPasswordProtected(!isPasswordProtected)
                        }
                      />{" "}
                      <span class="slider"></span>
                    </label>
                  </div>
                </div>
                <div className="inpt-newchat">
                  <p>Cover Image</p>
                  <input type="file" style={{ border: "none" }} />
                </div>
                <hr />
                <div className="inpt-newchat">
                  <p>Disable user list & direct messages</p>
                  <select name="" id="">
                    <option value="">Global Setting</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
                <div className="inpt-newchat">
                  <p>Disable room/group chats only</p>
                  <select name="" id="">
                    <option value="">Global Setting</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
                <div className="inpt-newchat">
                  <p>User list type</p>
                  <select name="" id="">
                    <option value="">Global Setting</option>
                    <option value="">Show all users</option>
                    <option value="">Show online users onlly</option>
                    <option value="">Show authorized users onlly</option>
                    <option value="">Show linked users onlly</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="btn-newChat">
              <button
                type="button"
                onClick={handleToggleChatList}
                className="closeReport"
              >
                Close
              </button>
              <button className="SubmitReport">Submit Report</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewChat;
