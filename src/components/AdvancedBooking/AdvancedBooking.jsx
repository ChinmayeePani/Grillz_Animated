import React from 'react'
import './AdvancedBooking.css'
import BookingInfo from './BookingInfo'
import { infoItems } from '../../constants'

const AdvancedBooking = () => {
  return (
    <div className='advanced_booking'>
      <img src='dots-bg1.svg' alt='dots_advanced1' className='dots_advanced1' />
      <img src='dots-bg1.svg' alt='dots_advanced2' className='dots_advanced2' />
      <img
        src='./lettuce.png'
        alt='lettuce_advanced'
        className='lettuce_advanced'
      />
      <img
        src='./cauliflower.png'
        alt='cauliflower_advanced'
        className='cauliflower_advanced'
      />

      <div className='content_container'>
        <div className='header_bar' />
        <p className='text_head'>advanced booking</p>
        <div className='search_container'>
          <input
            type='text'
            className='search_input'
            placeholder='search restaurant'
          />
          <button className='go_btn_2'>GO</button>
        </div>
        <div className='info_flex'>
          {infoItems.map((item, i) => {
            return <BookingInfo key={i} {...item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AdvancedBooking
