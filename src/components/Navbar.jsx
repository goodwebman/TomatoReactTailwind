import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from './../assets/assets'
import { StoreContext } from '../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
	const [menu, setMenu] = useState('menu')
    const {getTotalCartAmount} = useContext(StoreContext)

	return (
		<div className='py-[20px] flex items-center justify-between '>
			<Link to='/'>
				<img
					className='w-[150px] max-[525px]:w-[125px] max-[385px]:w-[100px]'
					src={assets.logo}
					alt='logo'
				/>
			</Link>
			<ul className='flex list-none gap-5 text-[#49557e] cursor-pointer max-[1000px]:hidden'>
				<Link
					onClick={() => setMenu('home')}
					to='/'
					className={
						menu === 'home' ? 'pb-[2px] border-b-2 border-[#49557e]' : ''
					}
				>
					home
				</Link>
				<a
					href
					onClick={() => setMenu('menu')}
					className={
						menu === 'menu' ? 'pb-[2px] border-b-2 border-[#49557e]' : ''
					}
				>
					menu
				</a>
				<a
					onClick={() => setMenu('mobile-app')}
					className={
						menu === 'mobile-app' ? 'pb-[2px] border-b-2 border-[#49557e]' : ''
					}
				>
					mobile-app
				</a>
				<a
					onClick={() => setMenu('contact-us')}
					className={
						menu === 'contact-us' ? 'pb-[2px] border-b-2 border-[#49557e]' : ''
					}
				>
					contact us
				</a>
			</ul>
			<div className='flex items-center gap-10 max-[600px]:gap-5'>
				<img className='max-[480px]:w-[20px]' src={assets.search_icon} alt='' />
				<div className='relative '>
					<Link to='/cart'>
						<img
							className='max-[480px]:w-[20px]'
							src={assets.basket_icon}
							alt=''
						/>
					</Link>
					<div className={getTotalCartAmount() === 0 ? '' : 'absolute min-w-[10px] min-h-[10px] bg-[#f26246] border rounded-[5px] -top-2 -right-2'}></div>
				</div>
				<button
					onClick={() => setShowLogin(true)}
					className='text-[#49557e] border border-[#f26246] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] duration-200 max-[600px]:py-[5px] max-[600px]:px-[20px]'
				>
					sign in
				</button>
			</div>
		</div>
	)
}

export default Navbar
