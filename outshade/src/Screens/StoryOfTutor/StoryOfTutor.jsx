import React from 'react'
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import outshade from "../Photos/outshade.jpg"


const Frame1 = styled.div`
  border-radius: 0px 150px 0px 0px; 
`
const Frame2 = styled.div`
   border-radius: 15px 50px 30px 5px;
` 

 const StoryOfTutor = () => {
  return (
    <section  className='grid lg:grid-cols-2 py-12 lg:py-12 '>
       <div className='flex flex-row md:justify-center items-center lg:justify-end px-5 py-12 '>
            <div className='flex flex-col md:w-3/4 md:items-center lg:items-start lg:w-2/3   w-auto '>
                <div className='mb-8'>
                  <h1 className='text-3xl md:text-5xl font-semibold' >The story of Tutor<br/>Master?</h1>
                </div>
                <div className='md:w-[386px] lg:w-[386px] px-3 pb-6'>
                  <p >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className='mb-8'>
                  <ul>
                    <div className='flex items-center'>
                      <div >
                        <BsCheckLg size={30}  style={{"color":"#007CC2",}}/>
                      </div>
                      <li className='mx-4 pb-4 font-semibold'>USP #1 showcased here with brief as needed</li>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <BsCheckLg size={30} style={{"color":"#007CC2"}}/>
                      </div>
                      <li className='mx-4 pb-4 font-semibold'>USP #1 showcased here with brief as needed</li>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <BsCheckLg size={30} style={{"color":"#007CC2"}}/>
                      </div>
                      <li className='mx-4 pb-4 font-semibold'>USP #1 showcased here with brief as needed</li>
                    </div>
                   
                  </ul>
                </div>
                <div  className='mb-8'>
                  <button className='bg-primary text-white w-52 h-12	bg-blue-700'>Know More</button>
                </div>
            </div>
       </div>

       <div className='relative flex justify-center items-start order-first sm:order-last ' > 
              <div className='w-full h-96 absolute '>
                
              </div>
              <Frame1 className=' p-2 md:w-1/2 md:h-[28rem] md:border-4 lg:w-2/3  md:border-white  lg:border-blue-700 '>
                  <Frame2>
                  <img src={outshade} className='w-full md:object-cover  md:w-96 md:h-[27rem] md:top-[40px] md:left-[140px] lg:absolute lg:top-[40px] lg:left-[110px] lg:w-[63%] ' style={{"border-radius": "0px 150px 0px 0px"}} />
                  </Frame2>
              </Frame1>
       </div>
    </section>
  )
}


export default StoryOfTutor;