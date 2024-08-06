import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseShareService,
  toggleShareService,
} from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const ShareService = () => {
  const [service , setService] = useState("")

  const dispatch = useDispatch();
  const { isShareServiceModal } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null);

  const handleToggleShareService = () => {
    dispatch(toggleShareService());
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && !chatRoomRef.current.contains(event.target)) {
        dispatch(FalseShareService());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div
      className={`overlay overflow-hidden ${
        isShareServiceModal ? "active-chat" : "disactive-chat"
      } `}
    >
      <div ref={chatRoomRef} className={`new-chat ${
        isShareServiceModal ? "new-chat-active" : ""
        }`}>
        <div className="share-service-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="sell-product-title !mb-0">Share Service</h2>
              <button className="w-fit p-2 text-[#adafca]" onClick={handleToggleShareService}><FaTimes /></button>
            </div>
            {service && 
                <h2 className="w-fit text-white text-[1rem] bg-[#fd6729] py-[8px] px-[20px] rounded-[30px] cursor-pointer"
                onClick={() => setService("")}>
                  {service} <FaTimes className="inline" />
                </h2>
              }
            <form action="">
              <div className="wrap-new-chat">
                <div className="grid md:!grid-cols-2 lg:!grid-cols-3 py-[10px] pr-[20px]">
                  <div className="select-service-card" onClick={() => setService("Service 1")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 2")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 3")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 4")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 5")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[15px] mt-[3rem]">
                <button className="button white">Cancel</button>
                <button className="button primary">Share Service</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ShareService;
