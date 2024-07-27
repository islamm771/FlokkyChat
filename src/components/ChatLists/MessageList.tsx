import { RefObject, useEffect, useRef, useState } from 'react'
import { FaMusic, FaPlus, FaPoll, FaVideo } from 'react-icons/fa'
import { RiContactsBookFill } from 'react-icons/ri'
import { GrServices } from 'react-icons/gr'

// import { useDispatch } from 'react-redux'
// const dispatch = useDispatch()

const MessageList = () => {
    const [showMessageOptions , setMessageOptions] = useState(false)

    const messageOptionsRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
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
        <span className='bg-[#eee] text-[#6d6d6d] block p-2 rounded-[50%] cursor-pointer'
        onClick={() => setMessageOptions(prev => !prev) } >
            <FaPlus />
        </span>

        <div className='absolute bottom-[45px] left-0 bg-white text-black rounded-md w-[140px] transition-all duration-[0.5s] z-10'
        style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        opacity: showMessageOptions ? 1 : 0,
        visibility: showMessageOptions ? "visible" : "hidden",
        transform : showMessageOptions ? "translateY(0px)" : "translateY(20px)"
        }}
        >
        <ul>
        <li 
            onClick={ () => {
                setMessageOptions(false)
            } }
            className='text-[14px] flex items-center gap-2 cursor-pointer py-2 px-2 border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>
                <FaPoll /> Poll
        </li>
        <li 
            onClick={ () => {
                setMessageOptions(false)
            } }
            className='text-[14px] flex items-center gap-2 cursor-pointer py-2 px-2 border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>
                <FaVideo /> Video
        </li>
        <li 
            onClick={ () => {
                setMessageOptions(false)
            } }
            className='text-[14px] flex items-center gap-2 cursor-pointer py-2 px-2 border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>
                <FaMusic /> Audio
        </li>
        <li 
            onClick={ () => {
                setMessageOptions(false)
            } }
            className='text-[14px] flex items-center gap-2 cursor-pointer py-2 px-2 border-b border-solid border-[#ddd] transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>
                <RiContactsBookFill /> Contact
        </li>
        <li 
            onClick={ () => {
                setMessageOptions(false)
            } }
            className='text-[14px] flex items-center gap-2 cursor-pointer py-2 px-2 transition-all duration-[0.3s] hover:pl-[10px] hover:bg-[#eee]'>
                <GrServices /> Service
        </li>

        </ul>
        </div>
    </div>
    )
}

export default MessageList