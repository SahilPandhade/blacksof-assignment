import React, { useState } from 'react'
import { CompanyLogo } from '../../CompanyLogo'
const Footer = () => {
    const [activeLogoIndex, setActiveLogoIndex] = useState<number>(5);

    const handleLogoClick = (index:number) => {
        setActiveLogoIndex(index);
    };
    return (
        <div className={`mt-12 pb-10`}>
            <div className='flex flex-col justify-between gap-5 '>
                <div className='flex justify-center'>Leading the charge for industries!</div>
                <div className='flex flex-row'>
                    {[...Array(10)].map((_, index) => (
                        <CompanyLogo key={index}
                            isActive={index === activeLogoIndex}
                            onClick={() => handleLogoClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer