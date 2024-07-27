import { Modal, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setIsMuteModalOpen } from '../../app/features/modalsSlice';


const MuteModal = () => {
    const dispatch = useDispatch()
    const {isMuteModalOpen} = useSelector((state:RootState) => state.modals)
    const [value, setValue] = useState(1);

    const handleClose = () => {
        dispatch(setIsMuteModalOpen(false))
    }

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <Modal 
        title="Mute Conversation" 
        onOk={handleClose} 
        onCancel={handleClose} 
        open={isMuteModalOpen}
        footer={null}
        >
            <Radio.Group onChange={onChange} value={value}>
                <Space direction='vertical'>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Space>
            </Radio.Group>
            <div className='flex items-center justify-end gap-3 mt-6'>
                <button className='bg-red-600 text-white p-2 px-5 rounded-md'>Mute</button>
                <button className='bg-blue-600 text-white p-2 px-5 rounded-md'>No</button>
            </div>
        </Modal>
    );
}

export default MuteModal