import ChatHeader from '../components/ChatHeader'
import ChatsWrapper from '../components/Conversation/ChatsWrapper'
import ChatContent from '../components/ChatContent';
import ChatInfo from '../components/ChatInfo';

const Chat = () => {
  return (
    <div>
      <ChatHeader />

      <main className="chat-container flex bg-white text-[#050505]">

        <ChatsWrapper />

        <ChatContent />

        <ChatInfo />

      </main>

    </div>
  )
}

export default Chat