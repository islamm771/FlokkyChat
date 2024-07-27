import { useDispatch } from "react-redux"
import { setChatTab } from "../app/features/chatTabSlice"
import { IoIosChatbubbles } from "react-icons/io"
import MenuList from "./ChatLists/MenuList"
import { FaHeart, FaUser } from 'react-icons/fa'
import { FaShop, FaUserGroup } from "react-icons/fa6"
import { PiBagSimpleFill } from "react-icons/pi"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { MdAdminPanelSettings } from "react-icons/md"
import { setIsChatContentHidden, setIsChatInfoHidden } from "../app/features/sectionsSlice"

const ChatHeader = () => {
    const dispatch = useDispatch()
  return (
    <>
    <header className='flex flex-wrap items-center gap-4 bg-white text-black px-4 border-b border-[#eee] border-solid'>
        <div className='border-r border-[#ddd] text-[#6d6d6d] flex items-center pr-4 py-5'>
          <IoIosChatbubbles size={25} />
        </div>
        <ul className='flex items-center gap-3'>
          <li className='bg-[#eee] text-[#6d6d6d] p-3 md:p-4 rounded-[50%] cursor-pointer' 
            onClick={ () => {
              dispatch(setIsChatContentHidden(true))
              dispatch(setIsChatInfoHidden(true))
              dispatch( setChatTab(1) )
            } }>
            <FaUser />
          </li>
          <li className='bg-[#eee] text-[#6d6d6d] p-3 md:p-4 rounded-[50%] cursor-pointer' 
              onClick={ () => {
                dispatch(setIsChatContentHidden(true))
                dispatch(setIsChatInfoHidden(true))
                dispatch( setChatTab(2) )
                } }>
              <FaUserGroup />
          </li>
          <li className='bg-[#eee] text-[#6d6d6d] p-3 md:p-4 rounded-[50%] cursor-pointer' 
              onClick={ () => {
                dispatch(setIsChatContentHidden(true))
                dispatch(setIsChatInfoHidden(true))
                dispatch( setChatTab(3) )
                } }>
              <FaShop />
          </li>
          <li className='bg-[#eee] text-[#6d6d6d] p-3 md:p-4 rounded-[50%] cursor-pointer' 
              onClick={ () => {
                dispatch(setIsChatContentHidden(true))
                dispatch(setIsChatInfoHidden(true))
                dispatch( setChatTab(4) )
                } }>
              <PiBagSimpleFill />
          </li>
          <li className='bg-[#eee] text-[#6d6d6d] p-3 md:p-4 rounded-[50%] cursor-pointer' 
              onClick={ () =>{
              dispatch(setIsChatContentHidden(true))
              dispatch(setIsChatInfoHidden(true))
              dispatch( setChatTab(5) )
              } }>
              <FaHeart />
          </li>
        </ul>

        <div className='hidden md:flex items-center gap-5 ml-auto'>
          <MenuList />
          <div>
              <div className="after:content-[''] border-solid border-[1px] border-[#ff6728] after:bg-[#1df377] after:w-[9px] after:h-[9px] after:absolute after:top-0 after:-left-2 after:rounded-full relative w-[45px] h-[45px] rounded-full">
                <div className="relative w-full h-full rounded-full p-[1px] bg-white">
                    <img
                    src="/img/avatar/01.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full"
                    />
                    <RiVerifiedBadgeFill
                    className="absolute -bottom-1 -right-2"
                    color={"#36e9f7"}
                    size={16}
                    />
                    <MdAdminPanelSettings
                    className="absolute -top-1 -right-2"
                    color={"#d7006a"}
                    size={16}
                    />
                    <div className="relative w-[16px] h-[16px] -top-[10px] -left-3 custom-badge">
                    <img
                        src="/img/cover/download.png"
                        alt="Padge"
                        className="absolute w-full h-full"
                    />
                    <p className="absolute text-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 font-bold">
                        12
                    </p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </header>
    </>
  )
}

export default ChatHeader