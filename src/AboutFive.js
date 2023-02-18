import React from 'react'

function AboutFive() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about_bg2.png' })`}}
    > 
      <div className=' absolute right-0 top-32'>
        <img src={process.env.PUBLIC_URL+'images/about/title05.png'} alt="" className='w-2/3 ml-auto'/>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex gap-10 w-8/12 '>
          <div className='w-auto'>
            <img src={process.env.PUBLIC_URL+'/images/about/about05_p01.png'} alt="" className='max-w-full' />
          </div>
          <div className='w-1/2'>
            <div className='flex items-end gap-5 mb-5'>
              <img src={process.env.PUBLIC_URL+'/images/about/about05_p02.png'} alt="" />
              <div className='text-[#421706] text-xl'>/ 黄士瑋建築師事務所</div>
            </div>
            <div className='text-white'>
              致力於實務的建築規劃設計，精耕培育學術界的建築教育，充滿活力實務與創意理念的融合，從每寸土地的開發、規劃設計到施工的執行，均從建築師的頂尖專業為出發點，親力親為全程植入身為建築師的專業堅持與夢想實現，賦予建築物耀眼的美學外觀、分寸精準的建材構築、幸福有感的舒適公設、完美融合科技智慧及綠建築理念實現。
            </div>
            
          </div>
        </div>
      </div>
        
      

    </div>
  )
}

export default AboutFive