import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { StateContext } from '../contexts/ContextProvider';

const SideBar = () => {
  const { setActiveMenu, currentColor } = useContext(StateContext);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      <div className='flex justify-center mt-4'>
        <div className='items-center flex'>
          <img src="../image 3.png" alt="" />
          <img src="../image 2.png" alt="" />
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <TooltipComponent content="Menu" position='BottomCenter'>
          <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3
               hover:bg-light-gray mt-4 block md:hidden'>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className='mt-10'>
        {links.map((item) => (
          <div key={item.title}>
            <p className='m-3 mt-4 uppercase'>{item.title}</p>
            {item.links.map((link) => (
              <NavLink to={`/${link.name}`} key={link.name} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })}
                className={({ isActive }) => isActive ? activeLink : normalLink}>
                {link.icon}
                <span className='capitalize'>
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
