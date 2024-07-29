import { useDispatch } from "react-redux";
import { toggleSearch } from "../../../app/feature/ListChatSlice";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


const Search = () => {
  const dispatch = useDispatch();

  const handleToggleChatList = () => {
    dispatch(toggleSearch());
  };
  return (
    <div className="content">
      <div className="wrap-profile">
        <div className="nav-search">
          <div className="input-group-listChat">
            <div
              className="input-group-append back-search"
              onClick={handleToggleChatList}
            >
              <IoIosArrowBack />
            </div>
            <input
              type="text"
              className="inpt-Search-listChat"
              placeholder="Search users in this room..."
            />
            <div className="input-group-append">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
