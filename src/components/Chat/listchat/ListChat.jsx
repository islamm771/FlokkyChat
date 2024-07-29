import { useEffect } from "react";
import Navigation from "./Navigation";
import PanelContent from "./PanelContent";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../../app/feature/ListChatSlice";

const ListChat = () => {
  const { isOpenChatList } = useSelector(selectGlobal);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      <div className={`${isOpenChatList ? "contListChat" : "toggleListChat"}`}>
        <Navigation />
        <PanelContent />
      </div>
    </>
  );
};

export default ListChat;
