import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
	const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate()

	return (
		<div className='mt-[100px]'>
			<div className=''>
				<div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 lg:text-[1vw] text-[12px]'>
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{food_list.map((item, index) => {
					if (cartItems[item._id] > 0) {
						return (
							<div>
								<div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  lg:text-[1vw] text-[12px] m-[10px_0px] text-black'>
									<img className='w-[70px] pr-[5px]' src={item.image} alt='' />
									<p>{item.name}</p>
									<p>${item.price}</p>
									<p>{cartItems[item._id]}</p>
									<p>${item.price * cartItems[item._id]}</p>
									<p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>
								</div>
								<hr className='h-[2px] bg-[#e2e2e2]'/>
							</div>
						)
					}
				})}
			</div>
      <div className='mt-[80px] flex justify-between lg:gap-[12vw] gap-[20px] max-[750px]:flex-col-reverse'>
        <div className='flex-[1] flex flex-col gap-[20px]'>
          <h2>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Suptotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='m-[10px_0px]'/>
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='m-[10px_0px]'/>
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='text-white bg-[#f26246] lg:w-[15vw] w-[200px] p-[12px_0px] rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-[1]'>
          <div className=' '>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]  '>
              <input className='bg-transparent border-none outline-none pl-[10px]' type="text" placeholder='promo code'/>
              <button className='lg:w-[10vw] w-[150px] p-[12px_5px] bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Cart
