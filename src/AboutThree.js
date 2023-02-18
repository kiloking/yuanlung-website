import React from 'react'

function AboutThree() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about_bg1.png' })`}}
    > 
      <div className=' absolute right-0 top-32'>
        <img src={process.env.PUBLIC_URL+'images/about/title03.png'} alt="" className='w-2/3 ml-auto'/>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/about/about03_title.png'} alt="" className='mb-10' />
          <div className='flex gap-10'>
            <img src={process.env.PUBLIC_URL+'/images/about/about03_item1.png'} alt="" />
            <img src={process.env.PUBLIC_URL+'/images/about/about03_item2.png'} alt="" />
            <img src={process.env.PUBLIC_URL+'/images/about/about03_item3.png'} alt="" />
          </div>
        </div>
      </div>
        
      

    </div>
  )
}

export default AboutThree