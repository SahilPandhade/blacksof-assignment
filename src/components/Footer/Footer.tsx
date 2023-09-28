import React from 'react'
import { CompanyLogo } from '../../CompanyLogo'
import { styles as st } from '../../styles'
const Footer = () => {
    return (
        <div className={`mt-12 pb-10`}>
            <div className='flex flex-col justify-between gap-5 '>
                <div className='flex justify-center'>Leading the charge for industries!</div>
                <div className='flex flex-row gap-2 rounded-2xl'>
                    {[...Array(10)].map((_, index) => (
                        <CompanyLogo key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer