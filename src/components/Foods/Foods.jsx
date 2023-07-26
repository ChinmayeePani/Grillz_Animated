import React from 'react'
import './Foods.css'
import FoodCard from './FoodCard'
import { cardItems } from '../../constants'

const Foods = () => {
  return (
    <div className='foods_container'>
      <p className='foods_header_main'>Explore Our Foods</p>
      <p className='foods_header_sub'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim illum
        quia repudiandae sit quibusdam, perspiciatis autem assumenda natus
        veritatis minus minima ipsa est laudantium.
      </p>
      <div className='food-card-grid'>
        {cardItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Foods
