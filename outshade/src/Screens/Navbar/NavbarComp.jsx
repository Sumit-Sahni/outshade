import React from 'react'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import {Link} from "react-scroll"

const NavbarComp = () => {

     const [nav, setNav] = useState(false)

     const handleNavbar = () =>{
        setNav(!nav)
     }

      
    

  return (
        <div className='w-screen h-[100px] py-5 z-10 bg-blue-500 fixed '>
          <div className='px-5 flex justify-between items-center w-full h-full'>
             <div className='flex justify-center flex-col text-white lg:mx-12'>
                 <h1 className='sm:text-3xl font-semibold sm:text4xl'>Tutor Master</h1>
                 <p className='' >Knowledge Transfer</p> 
             </div>
              <ul className='hidden md:flex items-center  text-white mx-12 '>
                   <li>
                       <h1>Home</h1>
                   </li>
                   <li>
                      <h1>Training</h1>
                   </li>
                   <li>
                       <h1>About</h1>
                   </li>       
                 <button className='px-7 py-2 rounded-3xl hover:underline underline-offset-4 bg-white text-black'>Login</button>
              </ul>
              <div className='md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer"/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <ul className={nav ? "hidden" : "absolute  w-full h-[100vh] px-8 md:hidden bg-blue-500  text-white" }>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <h1>Home</h1>
                 </li>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <h1>Training</h1>
                 </li>
                 
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <h1>About</h1>
                 </li>
                 <button className='mx-4 px-7 py-2 rounded-3xl hover:underline underline-offset-4 bg-white text-black'>Login</button>
              </ul>
        
        </div>
  )
}

export default NavbarComp;