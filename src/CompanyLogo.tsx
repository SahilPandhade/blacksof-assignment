import React from 'react'
import IMAGES from './assets'
export const CompanyLogo = () => {
  return (
    <div className='flex items-center justify-center rounded-2xl bg-white-100'>
        <img src={IMAGES.company} alt='logo' className='max-w-full '/>
    </div>
  )
}
