import React from 'react'
import profileAvatar from "./assets/img-avatar.png";

export default function Profile() {
  return (
    <div className='flex justify-center'>
        <img src={profileAvatar} alt="profile" className="rounded-full p-1 bg-gradient-to-b from-gray-200 to-gray-900"/>
    </div>
  )
}
