import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navLinks } from '../../constants/index.ts';
import { styles } from '../../styles';
import IMAGES from '../../assets/index.tsx'
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className={`${styles.paddingX} nav w-full flex-items-center py-5  top-0 `}>
      <div className='w-full flex justify-between items-center mx-auto '>
        <Link to="/" className="flex items-center" onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={IMAGES.logo} alt='logo' className='w-8 h-8 object-contain mr-2'></img>
          <p className='text-[18px] font-bold cursor-pointer'>TECH</p>
        </Link>

        <ul className='list-none flex flex-row gap-10 navList'>
          {
            navLinks.map((link) => (
              <li key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-[#808080] text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>

        <div className="flex gap-2">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-3xl text-[12px] p-4 hover:bg-gray-500">
            Contact us
          </button>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-3xl w-10 h-10 flex items-center justify-center hover:bg-gray-500">
            <span>&rarr;</span>
          </button>
        </div>
      </div> 
    </nav>
  )
}

export default Navbar