import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {
	const { food_list } = useContext(StoreContext)

	return (
		<div id='food-display' className='mt-[30px]'>
			<h2 className='lg:text-[2vw] text-[24px] font-[600]'>
				Top dishes near you
			</h2>
			<div className='grid grid-cols grid-cols-auto-fill-285 mt-[30px] gap-[30px] gap-y-[50p]'>
				{food_list.map((item, index) => {
					if ((category === 'All' || category === item.category)) {
						return (
							<FoodItem
								key={index}
								id={item._id}
								name={item.name}
								description={item.description}
								price={item.price}
								image={item.image}
							></FoodItem>
						)
					}
				})}
			</div>
		</div>
	)
}

export default FoodDisplay
