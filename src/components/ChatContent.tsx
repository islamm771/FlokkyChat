import { FaPhoneAlt, FaVideo } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { BiArrowBack } from 'react-icons/bi'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { MdAdminPanelSettings } from 'react-icons/md'
import ChatFooter from './ChatFooter'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { setIsChatContentHidden, setIsChatInfoHidden } from '../app/features/sectionsSlice'


const ChatContent = () => {
    const {isChatContentHidden} = useSelector( (state:RootState) => state.sections)
    const dispatch = useDispatch()
  return (
    <div className={`chat-content flex-1 relative ${isChatContentHidden ? "translate-x-full" : ""}`}>
          <header className="flex items-center md:justify-between p-4 border-b border-[#eee]">
            <button className='mr-4 md:hidden'
            onClick={ () => dispatch(setIsChatContentHidden(true)) }>
              <BiArrowBack />
            </button>
            
            <div className='user-wrapper flex gap-2'>
              <div className='user-img'>
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
              <div className='user-info'>
                <h4 className='text-[1rem] font-semibold'
                  onClick={ () => dispatch(setIsChatInfoHidden(false)) }>
                    Islam Ibrahim
                </h4>
                <p className='text-[10px]'>Active Now</p>
              </div>
            </div>

            <ul className='flex gap-4 ml-auto md:ml-0'>
              <li className='cursor-pointer'>
                <FaPhoneAlt />
              </li>
              <li className='cursor-pointer'>
                <FaVideo />
              </li>
              <li className='cursor-pointer'>
                <FaMagnifyingGlass />
              </li>
            </ul>
          </header>
          <div className="message-wrapper bg-blue-200">
          </div>
          <ChatFooter />
        </div>
  )
}

export default ChatContent