import { useState } from 'react'
import {assets} from '../assets/assets/assets'
import { NavLink, Link } from 'react-router-dom'



const NavBar = () => {

    const [visible, isVisible]=useState(false)


  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'><img src={assets.logo} className="w-36" alt="" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to="/" className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                <p>CATEGORIES</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/about" className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <Link to='/profile'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-white text-gray-500 rounded">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>
            <img  onClick={()=>isVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/*Sidebar for smaller screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>isVisible(false)}className="flex items-center gap-4 p-3 cursor-pointer">
                    <img className='h-4 rotate-180'src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>isVisible(false)} className='py-2 pl-6 border'to='/'>HOME</NavLink>
                <NavLink onClick={()=>isVisible(false)} className='py-2 pl-6 border'to='/collection'>CATEGORIES</NavLink>
                <NavLink onClick={()=>isVisible(false)} className='py-2 pl-6 border'to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>isVisible(false)} className='py-2 pl-6 border'to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar