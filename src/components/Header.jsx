import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-6 mx-auto bg-[url(/header_img.png)] bg-no-repeat bg-contain relative'>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn'>
            <h2 className='font-[500] text-white lg:text-[4.5vw] text-[32px] max-[690px]:text-[20px] max-[430px]:text-[15px]'>Order your favourite food here</h2>
            <p className='text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients andd culinary expertise. Our misson is to satisfy your cravings and elevate your dining experience, one delicius meal at a time.</p>
            <button className='text-[#747474] font-[500] py-[1vw] px-[2.3vw] bg-white text-[13px] lg:text-[1vw] border rounded-[50px] max-[690px]:py-[0.5vw] max-[690px]:px-[1.65vw]'>View Menu</button>
        </div>
    </div>
  )
}

export default Header