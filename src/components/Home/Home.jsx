import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home_container'>
      <img src='./home-food.png' alt='home-food' className='home_food_small' />

      <div className='home_left'>
        <div className='home_main'>
          <img src='./food.svg' alt='food' className='home_text1' />
          <p className='home_text2'>Discover Restaurant & Delicious Food</p>
          <div className='search_container'>
            <input
              type='text'
              className='search_input'
              placeholder='search restaurant, food'
            />
            <button className='go_btn allbtn'>GO</button>
          </div>
        </div>
      </div>
      <div className='home_right'>
        <div className='home_food_container'>
          <img src='./home-food.png' alt='home-food' className='home_food' />
          <div className='lettuce_container'>
            <img src='./lettuce.png' alt='lettuce' className='lettuce' />
            <img src='./dots-bg.svg' alt='dots' className='dots_home' />
          </div>
        </div>
      </div>  

      <div className='home_bottom'>
        <button className='location_btn allbtn'>
          <img
            src='./place-holder.svg'
            alt='place-holder'
            className='location_icon_home'
          />
          Indore
        </button>
        <div className='arrows_right'>
          <img
            src='./left-arrow.svg'
            alt='homearrowleft'
            className='arrownavigate'
          />
          <img
            src='./right-arrow.svg'
            alt='homearrowright'
            className='arrownavigate'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
