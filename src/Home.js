import React,{useState} from 'react'
import SwiperBgImages from './Components/SwiperBgImages'
import {homeBanner} from './Components/itemData'
import { motion } from "framer-motion";
function Home() {

  return (
    <div className='min-h-screen relative'>
      <div>
        <SwiperBgImages imgData={homeBanner}/>
      </div>
      <motion.div 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1,  }}
        transition={{
          ease: "easeInOut",
          duration: .6,
          delay: 0.3,
        }}
        className=' absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-30  text-white text-center'>
        <div className='text-2xl md:text-4xl my-3   font-bold drop-shadow-md tracking-widest'>遠隆營造股份有限公司</div>
        <div className='md:text-lg pb-3 leading-6 tracking-wide drop-shadow-md'>YUAN LUNG CONSTRUCTION CO .,LTD</div>
        <div className='text-2xl md:text-4xl my-3   font-bold drop-shadow-md tracking-widest'>遠鴻營造有限公司</div>
        <div className='md:text-lg pb-3 leading-6 tracking-wide drop-shadow-md'>YUAN HONG CONSTRUCTION LTD</div>
      </motion.div>
    </div>
  )
}

export default Home