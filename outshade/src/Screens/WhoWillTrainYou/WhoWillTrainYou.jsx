import React from 'react'
import sumit from  "../Photos/outshade2.jpg"


const WhoWillTrainYou = () => {
  return (
    <section className='h-full lg:h-[80vh] my-12 py-12  mb-12'>
    <div className='grid justify-center items-center mb-12 lg:mb-10'>
          <div>
             <h1 className='text-2xl md:text-4xl text-blue-500 font-semibold mb-4'>Who will train you</h1>
             <p className='text-center text-[12px] sm:text-1xl mb-4 '>Tutor Master will cover the following topics.</p>
          </div>
     </div>

     <div className='h-[50vh] grid grid-cols-1 lg:grid-cols-2 items-center justify-center md:w-3/4 mx-auto gap-x-12 gap-y-3'>
              
                 <div className='w-full h-auto  flex px-2  md:px-2 '>
                     <div className='flex items-center'>
                        <img src={sumit} alt="" className='rounded-l-2xl w-64 h-full'/>
                     </div>
                     <div className='flex flex-col  w-full relative px-8 py-4 rounded-r-2xl' style={{"backgroundColor":" #F8F8F8"}}>
                            <h1 className=' sm:text-2xl'>James Williams</h1>
                             <p>Bsc Msc <br/>Cardiology </p>
                             <div className='text-[10px] sm:text-[15px]  absolute right-0 bottom-0  p-4 text-blue-500'>Know More</div>
                     </div>
                  </div>

                  <div className='w-full h-auto flex  px-2 md:px-2 '>
                  <div className='flex items-center'>
                        <img src={sumit} alt="" className='rounded-l-2xl w-64 h-full'/>
                     </div>
                     <div className='flex flex-col  w-full relative px-8 py-4 rounded-r-2xl' style={{"backgroundColor":" #F8F8F8"}}>
                            <h1 className=' sm:text-2xl'>James Williams</h1>
                             <p>Bsc Msc <br/>Cardiology </p>
                             <div className='text-[10px] sm:text-[15px]  absolute right-0 bottom-0  p-4 text-blue-500'>Know More</div>
                     </div>
                  </div>
                  <div className='w-full h-auto flex  px-2 md:px-2 '>
                  <div className='flex items-center'>
                        <img src={sumit} alt="" className='rounded-l-2xl w-64 h-full'/>
                     </div>
                     <div className='flex flex-col  w-full relative px-8 py-4 rounded-r-2xl' style={{"backgroundColor":" #F8F8F8"}}>
                            <h1 className=' sm:text-2xl'>James Williams</h1>
                             <p>Bsc Msc <br/>Cardiology </p>
                             <div className='text-[10px] sm:text-[15px]  absolute right-0 bottom-0  p-4 text-blue-500'>Know More</div>
                     </div>
                  </div>
                  <div className='w-full h-auto flex  px-2 md:px-2 '>
                  <div className='flex items-center'>
                        <img src={sumit} alt="" className='rounded-l-2xl w-64 h-full'/>
                     </div>
                     <div className='flex flex-col  w-full relative px-8 py-4 rounded-r-2xl' style={{"backgroundColor":" #F8F8F8"}}>
                            <h1 className=' sm:text-2xl'>James Williams</h1>
                             <p>Bsc Msc <br/>Cardiology </p>
                             <div className='text-[10px] sm:text-[15px]  absolute right-0 bottom-0 p-4 text-blue-500'>Know More</div>
                     </div>
                  </div>

               
     </div>
 </section>
  )
}

export default WhoWillTrainYou;