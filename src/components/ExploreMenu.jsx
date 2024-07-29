import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
	return (
		<div id='explore-menu' className='flex flex-col gap-5'>
			<h1 className='text-[#262626] font-[500] text-[2em]  '>Explore our menu</h1>
			<p className='max-w-[60%] text-[#808080] font-medium '>
				Choose from a diverse menu featuring a delectable array of dishes. Our
				misson is to satisfy your cravings and elevate your <br></br> dining
				experience, one delicius meal at a time.
			</p>
			<div className='flex justify-between items-center gap-6 text-center my-[20px] overflow-x-scroll'>
				{menu_list.map((item, index) => (
					<div
						onClick={() =>
							setCategory(prev =>
								prev === item.menu_name ? 'All' : item.menu_name
							)
						}
						key={index}
						
					>
						<img
							className={
								category === item.menu_name
									? 'min-w-[80px] border-[4px] border-[#f26246] p-[2px] rounded-[50%] cursor-pointer duration-200'
									: `min-w-[80px] cursor-pointer rounded-[50%] duration-200`
							}
							src={item.menu_image}
							alt={item.menu_name}
						/>
						<p className='mt-[10px] text-[#747474] lg:text-[1.4vw] text-[16px] cursor-pointer'>
							{item.menu_name}
						</p>
					</div>
				))}
			</div>
			<hr className='my-[10px] h-[2px] bg-[#e2e2e2] border-none' />
		</div>
	)
}

export default ExploreMenu
