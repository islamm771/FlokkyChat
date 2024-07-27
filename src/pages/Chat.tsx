import { FaPhoneAlt, FaVideo } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoIosInformationCircle } from 'react-icons/io'
import { IoOptionsOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { selectChatTab } from '../app/features/chatTabSlice'
import UserTab from '../components/Conversation/UserTab'
import { MdAdminPanelSettings, MdPermMedia } from 'react-icons/md'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import ChatHeader from '../components/ChatHeader'
import { selectActiveOptionsTab } from '../app/features/chatOptionsSlice'
import ChatFooter from '../components/ChatFooter'
import GroupTab from '../components/Conversation/GroupTab'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Photos',
    children: (
      <section className='grid grid-cols-3 gap-[10px]'>
        <img className='rounded-md h-full' src="/img/cover/03.jpg" alt="" />
        <img className='rounded-md h-full' src="/img/cover/04.jpg" alt="" />
        <img className='rounded-md h-full' src="/img/cover/05.jpg" alt="" />
        <img className='rounded-md h-full' src="/img/cover/03.jpg" alt="" />
        <img className='rounded-md h-full' src="/img/cover/02.jpg" alt="" />
        <img className='rounded-md h-full' src="/img/cover/01.jpg" alt="" />
        <img className='rounded-md h-full' src="/img/cover/04.jpg" alt="" />
        <img className='rounded-md h-full' src="/img/cover/05.jpg" alt="" />
      </section>
    ),
  },
  {
    key: '2',
    label: 'Videos',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Files',
    children: 'Content of Tab Pane 3',
  },
];

const Chat = () => {
  const activeOptionsTab = useSelector(selectActiveOptionsTab)

  const activeTab = useSelector(selectChatTab)

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div>
      <ChatHeader />

      <main className="chat-container flex bg-white text-[#050505]">

        <aside className="chats-wrapper w-[320px]">
          {activeTab == 1 && <UserTab />}
          {activeTab == 2 && <GroupTab />}
        </aside>

        <div className="chat-content flex-1 relative">
          <header className="flex items-center justify-between p-4 border-b border-[#eee]">
            <div className='user flex gap-2'>
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
            <div className=''>
              <h4 className='text-[1rem] font-semibold'>Islam Ibrahim</h4>
              <p className='text-[10px]'>Active Now</p>
            </div>
            </div>

            <ul className='flex gap-4'>
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

        <aside className="chats-info w-[320px] bg-white">

          { activeOptionsTab == 1 && (
            <div className="information bg-white">
              <header>
                <img src="/img/cover/03.jpg" alt="" />
              </header>
              <div className='mt-[-1.5rem] flex flex-col gap-[10px]'>
                <div className='flex justify-center'>
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
                <div className='text-center'>
                  <h4 className='text-[1rem] font-semibold'>Islam Ibrahim</h4>
                  <p className='text-[10px]'>Active Now</p>
                </div>
              </div>
              <div className="chat-options-wrapper">
                <nav className='chat-options grid grid-cols-3 py-5 px-3 gap-4'>
                  <div className="chat-option flex flex-col items-center gap-[2px] p-2 py-3 rounded-md cursor-pointer bg-[#ddd]">
                    <IoIosInformationCircle />
                    About
                  </div>
                  <div className="chat-option flex flex-col items-center gap-[2px] p-2 py-3 rounded-md cursor-pointer bg-[#ddd]">
                    <MdPermMedia />
                    Media
                  </div>
                  <div className="chat-option flex flex-col items-center gap-[2px] p-2 py-3 rounded-md cursor-pointer bg-[#ddd]">
                    <IoOptionsOutline />
                    Options
                  </div>
                </nav>
                <div className="option-body px-3">
                  <div className="media">
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeOptionsTab == 2 && (
            <div className="star-messages bg-white">
              <h2>Star Messages</h2>
            </div>
          )}

          {activeOptionsTab == 3 && (
            <div className="archive-messages bg-white">
              <h2>Archive Messages</h2>
            </div>
          )}

        </aside>


      </main>

    </div>
  )
}

export default Chat