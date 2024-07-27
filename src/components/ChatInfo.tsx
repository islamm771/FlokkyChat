import { useDispatch, useSelector } from 'react-redux'
import { selectActiveOptionsTab } from '../app/features/chatOptionsSlice'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { MdAdminPanelSettings, MdPermMedia } from 'react-icons/md'
import { IoIosInformationCircle } from 'react-icons/io'
import { IoOptionsOutline } from 'react-icons/io5'
import { Tabs } from 'antd';
import { TabsProps } from 'antd'
import { RootState } from '../app/store'
import { BiArrowBack } from 'react-icons/bi'
import { setIsChatInfoHidden } from '../app/features/sectionsSlice'

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
  

const ChatInfo = () => {
    const dispatch = useDispatch()
    const {isChatInfoHidden} = useSelector( (state:RootState) => state.sections)
    const activeOptionsTab = useSelector(selectActiveOptionsTab)
    const onChange = (key: string) => {
        console.log(key);
      };

  return (
    <aside className={`chats-info w-[320px] ${isChatInfoHidden ? "" : "!translate-x-0"}`}>

          { activeOptionsTab == 1 && (
            <div className="information bg-white">
              <header className='relative'>
                <img src="/img/cover/03.jpg" alt="" />
                <button className='mr-4 md:hidden absolute top-4 left-4 text-white'
                    onClick={ () => dispatch(setIsChatInfoHidden(true)) }>
                    <BiArrowBack />
                </button>
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
  )
}

export default ChatInfo