import React from 'react'

function AboutTwo() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about_bg2.png' })`}}
    > 
      <div className=' absolute right-0 top-32'>
        <img src={process.env.PUBLIC_URL+'images/about/title02.png'} alt="" className='w-2/3 ml-auto'/>
      </div>
      <div className='pt-12 pl-36'>
       <div className='w-[2px]  bg-[#421706] min-h-screen'></div>
      </div>
        
      

    </div>
  )
}

export default AboutTwo