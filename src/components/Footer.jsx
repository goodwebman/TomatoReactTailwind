import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
	return (
		<div id='footer' className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]'>
			<div className='w-full grid grid-cols-[2fr_1fr_1fr] max-[720px]:grid-cols-[3fr] gap-20'>
				<div className='flex flex-col items-start gap-5' >
					<img src={assets.logo} alt='' />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas facilis explicabo impedit soluta modi vero culpa dolorum? Est quod, voluptas nostrum iste ad soluta debitis voluptate officia esse repellendus quibusdam ipsam ea, dolorem dolores! Explicabo labore laudantium quibusdam veritatis quod quia, dolorum aspernatur.
					</p>
					<div className='flex'>
						<img className='w-10  mr-[15px] cursor-pointer' src={assets.facebook_icon} alt='' />
						<img className='w-10  mr-[15px] cursor-pointer' src={assets.twitter_icon} alt='' />
						<img className='w-10  mr-[15px] cursor-pointer' src={assets.linkedin_icon} alt='' />
					</div>
				</div>
				<div className='flex flex-col items-start gap-5'>
					<h1 className='text-white text-[30px] font-bold'>COMPANY</h1>
                    <ul >
                        <li className='mb-[10px] cursor-pointer'>Home</li>
                        <li className='mb-[10px] cursor-pointer'>About us</li>
                        <li className='mb-[10px] cursor-pointer'>Delivery</li>
                        <li className='mb-[10px] cursor-pointer'>Privacy policy</li>
                    </ul>

				</div>
				<div className='flex flex-col items-start gap-5'>
                    <h2 className='text-white text-[30px] font-bold'>
                        GET IN TOUCH
                    </h2>
                    <ul>
                        <li className='cursor-pointer'>+1-212-456-7890</li>
                        <li className='cursor-pointer'>contact@tomato.com</li>
                    </ul>
                </div>
			</div>
            <hr className='w-full h-[2px] my-[20px] bg-gray-500 border-none'/>
            <p>Copyright 2024 © Tomato.com - All Right Reserved.</p>
		</div>
	)
}

export default Footer
