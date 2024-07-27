import MessageList from './ChatLists/MessageList'
import { FaImage, FaMicrophone } from 'react-icons/fa'
import { MdEmojiEmotions } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'

const ChatFooter = () => {
  return (
    <footer className='chat-footer flex items-center gap-2 bg-white p-2 w-full absolute bottom-0 z-20'>
        <div className='chat-footer-left flex gap-2'>
            <MessageList />
            <span className='bg-[#eee] text-[#6d6d6d] p-2 rounded-[50%] cursor-pointer'><FaImage /></span>
            <span className='bg-[#eee] text-[#6d6d6d] p-2 rounded-[50%] cursor-pointer'><MdEmojiEmotions /></span>
        </div>
        <div className='chat-footer-input flex-1'>
            <textarea 
            className='border-none rounded-[30px] bg-[#ddd] w-full h-[40px] px-4 resize-none' 
            name="" 
            id=""></textarea>
        </div>
        <div className='chat-footer-right flex gap-2'>
            <span className='bg-[#eee] text-[#6d6d6d] p-2 rounded-[50%] cursor-pointer'><FaMicrophone /></span>
            <span className='bg-[#eee] text-[#6d6d6d] p-2 rounded-[50%] cursor-pointer'><IoIosSend /></span>
        </div>
    </footer>
  )
}

export default ChatFooter