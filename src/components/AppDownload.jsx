import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' className='m-[auto_auto] mt-[100px] lg:text-[3vw] text-[20px] text-center font-[500]'>
        <p>For Better Experience Download <br  /> <span className='text-orange-600'>Tomato App</span> </p>
        <div className='flex justify-center lg:gap-[2vw] gap-[10px] mt-10 max-[500px]:flex-col max-[500px]:w-[150px] m-[auto_auto]'>
            <img className='cursor-pointer hover:scale-105 duration-300 ' src={assets.play_store} alt="" />
            <img className='cursor-pointer hover:scale-105 duration-300 ' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload