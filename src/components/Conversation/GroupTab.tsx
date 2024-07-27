import DeleteModal from '../ChatModals/DeleteModal';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { MdAdminPanelSettings } from 'react-icons/md';
import ConversationList from '../ChatLists/ConversationList';
import ArchiveModal from '../ChatModals/ArchiveModal';
import MuteModal from '../ChatModals/MuteModal';


const GroupTab = () => {
  return (
    <>
        <header className='flex items-center justify-between p-4'>
            <h3 className='text-[20px] font-semibold'>Chats - Groups</h3>
            <div className='flex items-center gap-2'>
            <button>New</button>
            <button>Filter</button>
            </div>
        </header>
        <div className="search p-4">
            <input className='border-none rounded-[30px] bg-[#ddd] w-full' type="text" name="" id="" placeholder='Search in chats...' />
        </div>
        <div className="chats">
            <div className='chat flex gap-3 relative p-4'>
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
                <div className='flex-1'>
                    <h5 className='leading-[1] mb-1 font-semibold'>Islam Ibrahim</h5>
                    <p className='text-[14px]'>Lorem ipsum dolor...</p>
                </div>
                <ConversationList />
            </div>
            <div className='chat flex gap-3 relative p-4'>
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
                <div className='flex-1'>
                    <h5 className='leading-[1] mb-1 font-semibold'>Islam Ibrahim</h5>
                    <p className='text-[14px]'>Lorem ipsum dolor...</p>
                </div>
                <ConversationList />
            </div>
            <div className='chat flex gap-3 relative p-4'>
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
                <div className='flex-1'>
                    <h5 className='leading-[1] mb-1 font-semibold'>Islam Ibrahim</h5>
                    <p className='text-[14px]'>Lorem ipsum dolor...</p>
                </div>
                <ConversationList />
            </div>
        </div>
        <ArchiveModal />
        <MuteModal />
        <DeleteModal />
    </>
  )
}

export default GroupTab