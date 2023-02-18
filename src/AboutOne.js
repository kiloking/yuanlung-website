import React from 'react'

function AboutOne() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about_bg1.png' })`}}
    > 
      <div className=' absolute right-0 top-32'>
        <img src={process.env.PUBLIC_URL+'images/about/title01.png'} alt="" className='w-2/3 ml-auto'/>
      </div>
      <div className='pt-12'>
        <img src={process.env.PUBLIC_URL+'images/about/p01.png'} alt=""  className=' aspect-[581/540] max-h-[92vh]'/>
      </div>
        
      

    </div>
  )
}

export default AboutOne