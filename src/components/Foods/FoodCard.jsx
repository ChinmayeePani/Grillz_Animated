import React from 'react'
import './Foods.css'

const FoodCard = ({ cardImg, title, price }) => {
  return (
    <div className='card'>
      <img src={cardImg} alt='CardImage' className='card-img' />
      <div className='card-content'>
        <div className='content_title_container'>
          <p className='card-title'>{title}</p>
          <p className='card-title_price'>{price}</p>
        </div>
        <p className='card-text'>
          Lorem ipsum dolor sit amet, consectetur at eleifend dolor.
        </p>
      </div>
    </div>
  )
}

export default FoodCard
