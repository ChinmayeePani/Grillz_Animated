import React from 'react'
import './AdvancedBooking.css'


const BookingInfo = ({headName, subInfo}) => {
  return (
    <div>
      <div className='info_head'>
        <p>{headName}</p>
        <img src='./red-caret-down.svg' alt='arrow_doen_red' />
      </div>
      <p className='subInfo'>{subInfo}</p>
    </div>
  )
}

export default BookingInfo