import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setIsArchiveModalOpen } from '../../app/features/modalsSlice';


const ArchiveModal = () => {
    const dispatch = useDispatch()
    const {isArchiveModalOpen} = useSelector((state:RootState) => state.modals)

    const handleClose = () => {
        dispatch(setIsArchiveModalOpen(false))
    }
    return (
        <Modal 
        title="Archive Chat" 
        onOk={handleClose} 
        onCancel={handleClose} 
        open={isArchiveModalOpen}
        footer={null}
        >
            <p> Do you want to archive this conversation ? </p>
            <div className='flex items-center justify-end gap-3 mt-6'>
                <button className='bg-green-600 text-white p-2 px-5 rounded-md'>Archive</button>
                <button className='bg-blue-600 text-white p-2 px-5 rounded-md'>No</button>
            </div>
        </Modal>
    );
}

export default ArchiveModal