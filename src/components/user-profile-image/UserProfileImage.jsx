import React from 'react'
import { MdAdminPanelSettings } from 'react-icons/md'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const UserProfileImage = ({src}) => {
  return (
    <div className="after:content-[''] border-solid border-[1px] border-[#ff6728] after:bg-[#1df377] after:w-[9px] after:h-[9px] after:absolute after:top-0 after:-left-2 after:rounded-full relative w-[45px] h-[45px] rounded-full">
        <div className="relative w-full h-full rounded-full p-[1px] bg-white">
            <img
                src={src ? src : "/img/avatar/01.jpg"}
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
                    src="/img/download.png"
                    alt="Padge"
                    className="absolute w-full h-full"
                />
                <p className="absolute text-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 font-bold">
                    12
                </p>
            </div>
        </div>
    </div>
  )
}

export default UserProfileImage