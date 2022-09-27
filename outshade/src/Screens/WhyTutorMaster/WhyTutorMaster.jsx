import React from 'react'
import { GoGift } from 'react-icons/go'
import { BiNetworkChart} from 'react-icons/bi'
import { GiProgression} from 'react-icons/gi'

 const WhyTutorMaster = () => {
  return (
    <section className=' lg:h-[55vh]'>
    <div className='grid justify-center items-center mb-12 my-12'>
         <div>
            <h1 className='text-2xl text-center md:text-4xl text-blue-500 font-semibold mb-4'>Why Tutor Master</h1>
            <p className='text-center text-[12px] sm:text-1xl mb-4 '>Tutor Master will cover the following topics.</p>
         </div>
    </div>

    <div className='grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 sm:justify-center items-center justify-center h-auto '>
         <div className='w-96 lg:w-full  flex items-center justify-center '>
         <div className='w-2/3 h-64  flex flex-col justify-center rounded-2xl  relative'>
              <div className='absolute top-[25px] left-[-66px]  lg:top-[18px] lg:left-[-46px]  w-24 h-24 rounded-full flex items-center justify-center'>
                   <GoGift size={40} style={{"color":"blue"}}/>
              </div>
                <div className='sm:w-full flex justify-center h-48'>
                    <div className='text-white flex flex-col items-center justify-evenly'>
                       <h1 className='text-1xl text-black '> The only source of learning pre-<br/>sales activities </h1>
                       <div className='w-80 outline  px-12'>
                          <p className=' text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu consectetur adipiscing elit, sed do eiu</p>
                       </div>
                    </div>
                </div>
              </div>
         </div>

         <div className='w-96 lg:w-full flex items-center justify-center '>
         <div className='w-2/3 h-64  flex flex-col justify-center rounded-2xl  relative'>
              <div className='absolute top-[25px] left-[-66px]  lg:top-[18px] lg:left-[-46px]  w-24 h-24 rounded-full flex items-center justify-center'>
                   <BiNetworkChart size={40} style={{"color":"blue"}}/>
              </div>
                <div className='sm:w-full flex justify-center h-48'>
                    <div className='text-white flex flex-col items-center justify-evenly'>
                       <h1 className='text-1xl text-black '> The only source of learning pre-<br/>sales activities </h1>
                       <div className='w-80 outline  px-12'>
                          <p className=' text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu consectetur adipiscing elit, sed do eiu</p>
                       </div>
                    </div>
                </div>
              </div>
         </div>

         <div className='w-96 lg:w-full flex items-center justify-center '> 
         <div className='w-2/3 h-64  flex flex-col justify-center rounded-2xl  relative'>
              <div className='absolute top-[25px] left-[-66px]  lg:top-[18px] lg:left-[-46px]   w-24 h-24 rounded-full flex items-center justify-center'>
                 <GiProgression size={40} style={{"color":"blue"}}/>
              </div>
                <div className='sm:w-full flex justify-center h-48'>
                    <div className='text-white flex flex-col items-center justify-evenly'>
                       <h1 className='text-1xl text-black '> The only source of learning pre-<br/>sales activities </h1>
                       <div className='w-80 outline  px-12'>
                          <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu consectetur adipiscing elit, sed do eiu</p>
                       </div>
                    </div>
                </div>
              </div>
         </div>
    </div>
</section>
  )
}

export default WhyTutorMaster;