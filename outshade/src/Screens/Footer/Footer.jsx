import React from 'react'
import { CgFacebook} from "react-icons/cg";
import { SiTwitter} from "react-icons/si";
import { GrLinkedinOption} from "react-icons/gr";
import {BsFillArrowUpSquareFill} from "react-icons/bs";

const Footer = () => {
  return (
    <section className='w-full h-full py-12  lg:h-[50vh] grid grid-cols-1 lg:grid-cols-4 relative ' style={{"backgroundColor":"#002C45"}}>
           <div className='flex items-center  text-white'>
                 <div className='w-full h-64 -dotted mx-auto flex flex-col justify-evenly  px-12'>
                     <div>
                        <p> Knowledge Transfer </p>
                     </div>
                     <div className='w-full '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum do
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum do</p>
                     </div>
                     <div className='w-24 flex flex-row justify-between '>
                        <CgFacebook/>
                        <SiTwitter/>
                        <GrLinkedinOption/>
                     </div>
                  </div>              
           </div>

           <div className='grid grid-cols-3 col-span-3 w-full   text-white'>
                 <div className=' w-1/2 flex justify-end  sm:items-center mx-10'>
                     <ul>
                       <li className='text-xl sm:text-2xl font-semibold my-6'>Quick Links</li>
                       <li className='pb-4'>Home</li>
                       <li className='pb-4'>About</li>
                       <li className='pb-4'>Trainings</li>
                       <li className='pb-4'>Contacts</li>
                     </ul>
                 </div>
                 <div className=' w-1/2 flex justify-start items-center'>
                     <ul>
                       <li className=' text-xl sm:text-2xl font-semibold my-6'>Topics</li>
                       <li className='pb-4'>Blanket topics</li>
                       <li className='pb-4'>Country topics</li>
                       <li className='pb-4'>Product topics</li>
                       <li className='py-4 '></li>
                     </ul>
                 </div>
                 <div className=' w-1/2 flex justify-start items-center'>
                     <ul>
                       <li className=' text-xl sm:text-2xl font-semibold my-6'>Important Links</li>
                       <li className='pb-4'>Privacy Policy</li>
                       <li className='pb-4'>Terms & Conditions</li>
                       <li className='pb-4'>Disclaimer</li>
                       <li className='pb-4'>Sitemap</li>
                     </ul>
                 </div>
           </div>
           <div className='right-0 bottom-0 absolute mx-4 mb-1'>
                <BsFillArrowUpSquareFill size={40} style={{"color":"#007CC2"}}/>
           </div>
    </section>
  )
}


export  default Footer;