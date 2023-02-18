import React from 'react'

function AboutFour() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about_bg3.png' })`}}
    > 
      <div className=' absolute right-0 top-32'>
        <img src={process.env.PUBLIC_URL+'images/about/title04.png'} alt="" className='w-2/3 ml-auto'/>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex gap-10'>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/about/about04_p01.png'} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/about/about04_p02.png'} alt="" />
          </div>
        </div>
      </div>
        
      

    </div>
  )
}

export default AboutFour