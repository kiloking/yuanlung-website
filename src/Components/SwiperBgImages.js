import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade,Autoplay } from "swiper";
function SwiperBgImages({imgData}) {
  return (
    <div className='relative w-full  bg-no-repeat bg-center bg-cover'>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        speed={2000}
        autoplay
        autoHeight
        loop={true}
        modules={[EffectFade,Autoplay]}
        className="mySwiper "
      >
        { imgData ?
          imgData.map((item,index)=>{
            return(
              <SwiperSlide key={index}>
                <div className='w-full bg-cover bg-no-repeat bg-center h-screen  brightness-75'
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/home/'+ item.image})`}}
                >
                </div>
              </SwiperSlide>
            )
          }) : <div>Loading</div>
        }


      </Swiper>
    </div>
  )
}

export default SwiperBgImages