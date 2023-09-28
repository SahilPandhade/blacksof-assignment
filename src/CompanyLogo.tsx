import React, { useState } from 'react'
import IMAGES from './assets'
interface Props {
  isActive: boolean,
  onClick: () => void
}
export const CompanyLogo = ({ isActive, onClick }: Props) => {
  const handleLogoClick = () => {
    onClick();
  };
  return (
    <div
      className={`flex rounded-md gap-1 cursor-pointer transition-transform transform hover:scale-90
      ${isActive ? 'z-10 shadow-lg scale-100' : 'z-10 scale-75'}`}
      onClick={handleLogoClick}
      style={{
        position: 'relative',
        backgroundColor: isActive ? 'transparent' : 'rgba(169, 169, 169, 0.5)',
      }}
    >
      <div className='relative'>
        <img src={IMAGES.company} alt='logo'
          className={`rounded-md transition-opacity m-0 ${isActive ? '' : 'z-0'
            }`}
          style={{
            opacity: isActive ? 1 : 0.5,
          }}
        />
        {!isActive && (
          <div
            className="absolute inset-0 bg-gray-500 opacity-75 rounded-md"
            style={{ zIndex: -1 }}
          ></div>
        )}
      </div>

    </div>
  )
}
