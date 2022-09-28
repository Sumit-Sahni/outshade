import React from 'react'
import ReactPlayer from 'react-player';

const TrainingVideo = () => {
  return (
    <section className=' h-full lg:h-[70vh] '>
       <div className='grid justify-center items-center mb-12 lg:mb-10'>
             <div>
                <h1 className='text-2xl md:text-4xl text-blue-500 font-semibold mb-4'>Training Overview</h1>
                <p className='text-center text-[12px] sm:text-1xl mb-4 '><hr></hr></p>
             </div>
        </div>

        <div className='grid grid-cols-1 items-center'>
            <div  className="w-[95%] h-48  md:w-10/12 md:h-96 lg:w-1/2 lg:h-96 mx-auto">
              <ReactPlayer
              url={"https://www.youtube.com/watch?v=nP3A5Y9Yais"}
               width="100%"
               height="100%"
               controls={true}
              />
           </div>
        </div>
    </section>
  )
}


export default TrainingVideo;