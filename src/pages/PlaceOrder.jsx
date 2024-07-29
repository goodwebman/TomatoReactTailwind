import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {
	const { getTotalCartAmount } = useContext(StoreContext)
	return (
		<form
			className='flex items-start justify-between gap-[15px] mt-[100px] max-[1080px]:block'
			action=''
		>
			<div className=''>
				<p className='text-[30px] font-[600] mb-[50px]'>Delivery Information</p>
				<div className='flex gap-[10px]'>
					<input
						className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
						type='text'
						placeholder='First name'
					/>
					<input
						className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
						type='text'
						placeholder='Last name'
					/>
				</div>
				<input
					className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
					type='email'
					placeholder='Email address'
				/>
				<input
					className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
					type='text'
					placeholder='Street'
				/>
				<div className='flex gap-[10px]'>
					<input
						className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
						type='text'
						placeholder='City'
					/>
					<input
						className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
						type='text'
						placeholder='State'
					/>
				</div>
				<div className='flex gap-[10px]'>
					<input
						className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
						type='text'
						placeholder='Zip code'
					/>
					<input
						className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
						type='text'
						placeholder='Country'
					/>
				</div>
				<input
					className='mb-[15px] w-full p-[10px] border-[#c5c5c5] border-[1px] rounded-[4px] outline-[#f26246]'
					type='text'
					placeholder='Phone'
				/>
			</div>

			<div className='w-full lg:max-w-[40%] max-w-[500px] max-[1080px]:mt-[30px]'>
				<div className='flex-[1] flex flex-col gap-[20px] '>
					<h2>Cart Totals</h2>
					<div>
						<div className='flex justify-between text-[#555]'>
							<p>Suptotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr className='m-[10px_0px]' />
						<div className='flex justify-between text-[#555]'>
							<p>Delivery Fee</p>
							<p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
						</div>
						<hr className='m-[10px_0px]' />
						<div className='flex justify-between text-[#555]'>
							<b>Total</b>
							<b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+2}</b>
						</div>
					</div>
					<button className='text-white bg-[#f26246] lg:w-[15vw] w-[200px] p-[12px_12px] rounded-[4px] cursor-pointer mt-[30px] whitespace-nowrap'>
						PROCEED TO CHECKOUT
					</button>
				</div>
			</div>
		</form>
	)
}

export default PlaceOrder
