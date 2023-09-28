import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { navLinks } from '../../../constants';
import { useNavigate } from 'react-router-dom';
interface MenuProps {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
    active: string,
    setActive: React.Dispatch<React.SetStateAction<string>>

}
const Menu = ({ toggle, setToggle, active, setActive }: MenuProps) => {
    const navigate = useNavigate()
    return (
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <FontAwesomeIcon icon={faBars} className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => { setToggle(!toggle) }} />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}
                                className={`${active === link.title ? "text-white" : "text-secondary"} 
              font-medium cursor-pointer text-[16px]`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(link.title);
                                }}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                    <li className={`${active === 'contact' ? "text-white" : "text-secondary"}
                        font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                            setToggle(!toggle);
                            setActive('contact')
                            navigate('#contact')
                        }}>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu