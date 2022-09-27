import React from 'react'
import { GiWorld } from 'react-icons/gi'
import { GoGift } from 'react-icons/go'
import { BiBlanket } from 'react-icons/bi'


 const Trained = () => {
  return (
    <section className='h-full lg:h-[70vh] mb-12'>
        <div className='grid justify-center items-center mb-12 lg:mb-10'>
             <div>
                <h1 className='text-2xl md:text-4xl text-blue-500 font-semibold mb-4'>On what you will be trained!</h1>
                <p className='text-center text-[12px] sm:text-1xl mb-4 '>Tutor Master will cover the following topics.</p>
             </div>
        </div>

        <div className='grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 sm:justify-center items-center justify-center  mb-12'>
             <div className='w-96 lg:w-full  flex items-center justify-center '> 
                  <div className='w-2/3 h-64  bg-blue-500 flex flex-col justify-center rounded-2xl  relative'>
                  <div className='absolute top-[-32px] left-[-36px]  w-24 h-24 rounded-full flex items-center justify-center bg-blue-500'>
                     <GiWorld size={60} style={{"color":"white"}}/>
                  </div>
                    <div className='sm:w-full flex justify-center h-48'>
                        <div className='text-white flex flex-col items-center justify-evenly'>
                           <h1 className='text-3xl '>Country Topics</h1>
                           <p className='text-center '>USP #1 showcased here<br/>with brief as needed</p>
                           <button  className='bg-primary text-blue-500 w-48 h-12	bg-white'>Know More</button>
                        </div>
                    </div>
                  </div>
             </div>

             <div className='w-96 lg:w-full flex items-center justify-center '>
             <div className='w-2/3 h-64  bg-blue-500 flex flex-col justify-center rounded-2xl  relative'>
                  <div className='absolute top-[-32px] left-[-36px]  w-24 h-24 rounded-full flex items-center justify-center bg-blue-500'>
                     <GoGift size={60} style={{"color":"white"}}/>
                  </div>
                    <div className='sm:w-full flex justify-center h-48'>
                        <div className='text-white flex flex-col items-center justify-evenly'>
                           <h1 className='text-3xl '>Product Topics</h1>
                           <p className='text-center '>USP #1 showcased here<br/>with brief as needed</p>
                           <button  className='bg-primary text-blue-500 w-48 h-12	bg-white'>Know More</button>
                        </div>
                    </div>
                  </div>
             </div>

             <div className='w-96 lg:w-full flex items-center justify-center '> 
             <div className='w-2/3 h-64  bg-blue-500 flex flex-col justify-center rounded-2xl  relative'>
                  <div className='absolute top-[-32px] left-[-36px]  w-24 h-24 rounded-full flex items-center justify-center bg-blue-500'>
                     <BiBlanket size={60} style={{"color":"white"}}/>
                  </div>
                    <div className='sm:w-full flex justify-center h-48'>
                        <div className='text-white flex flex-col items-center justify-evenly'>
                           <h1 className='text-3xl '>Blanket Topics</h1>
                           <p className='text-center '>USP #1 showcased here<br/>with brief as needed</p>
                           <button  className='bg-primary text-blue-500 w-48 h-12	bg-white'>Know More</button>
                        </div>
                    </div>
                  </div>
             </div>
        </div>
    </section>
  )
}

export default Trained;