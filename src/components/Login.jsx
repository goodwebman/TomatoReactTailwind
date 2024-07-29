import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = ({ setShowLogin }) => {
	const [currentState, setCurrentState] = useState('Sign Up')

	return (
		<div className='absolute z-50 w-full h-full bg-[#00000090] grid'>
			<form className='place-self-center lg:w-[23vw] w-[330px] text-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-[8px] text-[14px] animate-fadeIn'>
				<div className='flex justify-between items-center text-black'>
					<h2 className='font-bold text-[25px]'>{currentState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt=''
                        className='w-4 cursor-pointer'
					/>
				</div>
				<div className='flex flex-col gap-[20px] '>
					{currentState === 'Login' ? (
						<></>
					) : (
						<input className='border-[#c9c9c9] border-[1px] p-[10px] rounded-[4px]' type='text' placeholder='Your name' required />
					)}

					<input className='border-[#c9c9c9] border-[1px] p-[10px] rounded-[4px]' type='email' placeholder='Your email' required />
					<input className='border-[#c9c9c9] border-[1px] p-[10px] rounded-[4px]' type='password' placeholder='Password' required />
				</div>
				<button className='p-[10px] rounded-[4px] bg-[#f26246] text-[15px] cursor-pointer text-white'>
					{currentState === 'Sign Up' ? 'Create account' : 'Login'}
				</button>
				<div className='flex gap-2 items-start -mt-[15px]'>
					<input className='mt-[4px]' type='checkbox' required />
					<p>By continuing, i agree to the terms of use & privacy policy.</p>
				</div>

				{currentState === 'Login' ? (
					<p>
						Create a new account? <span className='text-[#f26246] font-[600] cursor-pointer' onClick={()=>setCurrentState('Sign Up')}> Click here</span>
					</p>
				) : (
					<p>
						Alredy have an account? <span className='text-[#f26246] font-[600] cursor-pointer' onClick={()=>setCurrentState('Login')}> Login here</span>
					</p>
				)}
			</form>
		</div>
	)
}

export default Login
