import { Route, Routes, useActionData } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import { useState } from 'react'
import Login from './components/Login'

function App() {

	const [showLogin, setShowLogin] = useState(false)

	return (
		<>
		{showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
			<div className='w-[80%] m-auto'>
				<Navbar setShowLogin={setShowLogin} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<PlaceOrder />} />
				</Routes>
			</div>
			<Footer />
		</>
	)
}

export default App
