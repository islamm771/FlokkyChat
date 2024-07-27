import { RefObject, useEffect, useRef, useState } from 'react'
import { HiMiniSquares2X2 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
// import { setIsMuteModalOpen } from '../../app/features/modalsSlice'
import { setChatOptionsTab } from '../../app/features/chatOptionsSlice'


const MenuList = () => {
    const dispatch = useDispatch()
    const [showMessageOptions , setMessageOptions] = useState(false)

    const messageOptionsRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // Ensure e.target is typed correctly
            if (messageOptionsRef.current && !messageOptionsRef.current.contains(e.target as Node)) {
            setMessageOptions(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }, []);
  return (
    <div className="message-options relative" ref={messageOptionsRef}>
        <span className='bg-[#eee] text-[#6d6d6d] block p-4 rounded-[50%] cursor-pointer' onClick={() => setMessageOptions(prev => !prev) }>
            <HiMiniSquares2X2 />
        </span>

        <div className='absolute top-[50px] right-0 bg-white text-black rounded-md w-[140px] transition-all duration-[0.5s] z-10'
        style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        opacity: showMessageOptions ? 1 : 0,
        visibility: showMessageOptions ? "visible" : "hidden",
        transform : showMessageOptions ? "translateY(0px)" : "translateY(-20px)"
        }}
        >
        <ul>
        <li 
            onClick={ () => {
                dispatch( setChatOptionsTab(1) );
                setMessageOptions(false)
            } }
            className='text-[12px] cursor-pointer py-2 px-[6px] border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>Friend Information</li>
            <li 
            onClick={ () => {
                dispatch( setChatOptionsTab(2) );
                setMessageOptions(false)
            } }
            className='text-[12px] cursor-pointer py-2 px-[6px] border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>Star Messages</li>
            <li 
            onClick={ () => {
                dispatch( setChatOptionsTab(3) );
                setMessageOptions(false)
            } }
            className='text-[12px] cursor-pointer py-2 px-[6px] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>Archive Messages</li>
            {/* <li 
            onClick={ () => {
                dispatch(setIsMuteModalOpen(true))
                setMessageOptions(false)
            } }
            className='text-[12px] cursor-pointer py-2 px-[6px] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>Mute Conversation</li> */}

        </ul>
        </div>
    </div>
  )
}

export default MenuList