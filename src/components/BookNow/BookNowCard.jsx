import React from 'react'
import './BookNow.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const BookNowCard = ( { head, sub, location, bgImg } ) => {
  

  return (
    <div
      className='booknow_items_card'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className='card_details'>
        <p className='card_head'>{head}</p>
        <p className='card_sub'>{sub}</p>
        <div className='details_bottom'>
          <div className='location'>
            <img
              src='./place-holder.svg'
              alt='place-holder'
              className='location_icon'
            />
            <p>{location}</p>
          </div>
          <button className='book_now_button'>
            Book Now
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookNowCard