import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setIsDeleteModalOpen } from '../../app/features/modalsSlice';


const DeleteModal = () => {
    const dispatch = useDispatch()
    const {isDeleteModalOpen} = useSelector((state:RootState) => state.modals)

    const handleClose = () => {
        dispatch(setIsDeleteModalOpen(false))
    }
    return (
        <Modal 
        title="Delete Chat" 
        onOk={handleClose} 
        onCancel={handleClose} 
        open={isDeleteModalOpen}
        footer={null}
        >
            <p> Do you want to delete this conversation ? </p>
            <div className='flex items-center justify-end gap-3 mt-6'>
                <button className='bg-red-600 text-white p-2 px-5 rounded-md'>Delete</button>
                <button className='bg-blue-600 text-white p-2 px-5 rounded-md'>No</button>
            </div>
        </Modal>
    );
}

export default DeleteModal