import { RefObject, useEffect, useRef, useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { setIsArchiveModalOpen, setIsDeleteModalOpen, setIsMuteModalOpen } from '../../app/features/modalsSlice';
import { useDispatch } from 'react-redux';



const ConversationList = () => {
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
        <div className={`chat-options relative transition-opacity duration-[0.5s]
            ${showMessageOptions ? "opacity-100 visible" : "opacity-0 invisible"}`}
        
        ref={messageOptionsRef}>
            <span className='block absolute top-5 right-[-1px] cursor-pointer z-[1]'
                onClick={() => setMessageOptions(prev => !prev) } >
                <HiDotsHorizontal />
            </span>
            <div className='absolute top-[35px] right-0 bg-white text-black rounded-md w-[120px] transition-all duration-[0.5s] z-[5]'
            style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            opacity: showMessageOptions ? 1 : 0,
            visibility: showMessageOptions ? "visible" : "hidden",
            transform : showMessageOptions ? "translateY(0px)" : "translateY(-20px)"
            }}
            >
            <ul>
                <li 
                className='text-[12px] cursor-pointer py-2 px-[6px] border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'
                onClick={() => {
                    setMessageOptions(false);
                }}
                >
                    Pin Chat
                </li>
                <li 
                className='text-[12px] cursor-pointer py-2 px-[6px] border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'
                onClick={() => {
                    setMessageOptions(false);
                    dispatch(setIsArchiveModalOpen(true))
                }}
                >
                    Archive Chat
                </li>
                <li 
                className='text-[12px] cursor-pointer py-2 px-[6px] border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'
                onClick={() => {
                    setMessageOptions(false);
                    dispatch(setIsMuteModalOpen(true))
                }}
                >
                    Mute Chat
                </li>
                <li className='text-[12px] cursor-pointer py-2 px-[6px] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'
                onClick={ () => {
                    setMessageOptions(false);
                    dispatch(setIsDeleteModalOpen(true))
                } }
                >Delete Chat</li>
            </ul>
            </div>
        </div>
    )
}

export default ConversationList