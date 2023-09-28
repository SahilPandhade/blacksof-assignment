import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navLinks } from '../../constants/index.ts';
import { styles } from '../../styles';
import IMAGES from '../../assets/index.tsx'
import Menu from './Menu/Menu.tsx';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 `}>
      <div className='container max-w-4xl flex justify-between gap-10 items-center mx-auto '>
        <Link to="/" className="flex items-center" onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={IMAGES.logo} alt='logo' className='w-8 h-8 object-contain mr-2'></img>
          <p className='text-[18px] font-bold cursor-pointer'>TECH</p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
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
        <div className=" hidden sm:flex gap-2">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-3xl text-[12px] hover:bg-gray-500">
            Contact us
          </button>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-3xl w-10 h-10 flex items-center justify-center hover:bg-gray-500">
            <span>&rarr;</span>
          </button>
        </div>
      </div>
      <Menu toggle={toggle} setToggle={setToggle} active={active} setActive={setActive}/>
    </nav>
  )
}

export default Navbar