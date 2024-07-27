import { useSelector } from 'react-redux'
import UserTab from './UserTab'
import GroupTab from './GroupTab'
import { selectChatTab } from '../../app/features/chatTabSlice'

const ChatsWrapper = () => {
    const activeTab = useSelector(selectChatTab)
  return (
    <aside className="chats-wrapper w-[320px]">
        {activeTab == 1 && <UserTab />}
        {activeTab == 2 && <GroupTab />}
    </aside>
  )
}

export default ChatsWrapper