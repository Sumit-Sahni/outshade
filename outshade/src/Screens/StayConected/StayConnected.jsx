import React from 'react'
import styled from 'styled-components';
import sumit from "../Photos/sumit.png"

const ArrowUp = styled.div`
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    margin:auto;
    border-bottom: 20px solid #C4C4C4;
`

 const StayConnected = () => {
  return (
    <section className='h-screen lg:h-[70vh]'>
       <div className='grid justify-center items-center mb-12 my-12'>
            <div>
               <h1 className='text-2xl md:text-4xl text-blue-500 font-semibold mb-4'>Stay Connected with us</h1>
               <p className='text-center text-[12px] sm:text-1xl mb-4 '>Tutor Master will cover the following topics.</p>
            </div>
       </div>

      <div className='flex flex-col lg:flex-row h-96'>
        <div className='w-full lg:w-2/5 flex flex-col justify-center lg:items-end '>
          <div>
               <ArrowUp/>
              <div className='w-80 h-80 mx-auto grid grid-rows-4 ' style={{"backgroundColor": "#f3f3f3"}}>

                    <div className=' flex justify-around items-center'>
                      <h1>Notification</h1>
                       <h1>Marks as read</h1>
                    </div>
                    <div className=' flex items-center justify-around '>
                             <img src={sumit} alt="sumit" className='w-9 h-9 rounded-full  mb-5 '/>
                          <div>
                              <h1>Thomas added a new course on<br/>Cardiology</h1>
                              <p>3min ago</p>
                          </div>
                    </div>

                    <div className=' flex items-center justify-around'>
                             <img src={sumit} alt="sumit" className='w-9 h-9 rounded-full  mb-5 '/>
                          <div>
                              <h1>Thomas added a new course on<br/>Cardiology</h1>
                              <p>3min ago</p>
                          </div>
                    </div>

                    <div className=' flex items-center justify-between '>
                      <h1></h1>
                      <h1 className='mx-9 font-light'>view all</h1>
                    </div>

              </div>

          </div>
             
        </div>
         
        <div className=' lg:w-5/6 col-span-2 flex flex-col justify-center'>
               <div>
                <div className='h-5'></div>
                <div className='w-full lg:w-3/4 lg:h-[34vh] px-2 py-4 sm:p-12 lg:mx-8 flex lg:flex-col justify-evenly'  style={{"backgroundColor": "#f3f3f3"}}>
                <div className='flex flex-col lg:flex-row justify-evenly items-stretch '>
                            <div>
                               <img src={sumit} alt="sumit" className='w-9 h-9 rounded-full  mb-5 '/>
                            </div>
                              
                            <div>
                              <h1 className='font-semibold'>James</h1>
                              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offcia</p>
                            </div>
                              
                            <div className='self-start font-light py-4 '>
                              <p>3min ago</p>
                            </div>        
                     </div>

                     <div>

                     <div className='flex flex-col lg:flex-row justify-evenly items-stretch '>
                            <div>
                               <img src={sumit} alt="sumit" className='w-9 h-9 rounded-full  mb-5 '/>
                            </div>
                              
                            <div>
                              <h1 className='font-semibold'>James</h1>
                              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offcia</p>
                            </div>
                              
                            <div className='self-start font-light py-4 '>
                              <p>3min ago</p>
                            </div>        
                     </div>
                     </div>
                 </div>
               </div>
        </div>
      </div>
</section>
  )
}

export default StayConnected;
