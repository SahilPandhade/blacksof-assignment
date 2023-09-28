import React from 'react'
import { styles as st } from '../../styles'
import ContactForm from '../ContactForm/ContactForm'
import styles from 'index.css'
import Footer from '../Footer/Footer'
const MainPage = () => {
    return (
        <div className='w-full mx-auto'>
            <div className={`${st.paddingX} main mt-12 inset-0 top-[150px]  mx-auto flex flex-row items-start gap-10 xs:flex-col`}>
                <div className='p-5 flex flex-col gap-5'>
                    <h1 className='text-[42px]'>Searching for <b>Augmented Development</b> Teams to steer your product towards triumph?</h1>
                    <ul className='flex gap-12 flex-row'>
                        <li><label><p className='text-[32px] font-bold'>50+</p> Clients</label></li>
                        <li><label><p className='text-[32px] font-bold'>80+</p> Projects successfully completed</label></li>
                        <li><label><p className='text-[32px] font-bold'>60%</p> of the clients converted into longterm engagement partners</label></li>
                    </ul>
                </div>
                <ContactForm />
                
            </div> 
        </div>
    )
}

export default MainPage