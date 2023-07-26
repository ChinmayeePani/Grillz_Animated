import React from 'react'
import BookNowCard from './BookNowCard'
import './BookNow.css'
import { bookNowItems } from '../../constants'

const BookNow = () => {
  return (
    <div className='booknow_container'>
      <div className='booknow_top'>
        <div className='top_left'>
          <div className='left_design' />
          <p className='left_text_main'>some top restaurant for dining out or in!</p>
        </div>
        <p className='right_text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          molestias tempora aliquam? Necessitatibus fugiat eos impedit quis
          dolores officia molestiae maxime sit magnam reprehenderit non,
          explicabo doloribus voluptatum alias ut?
        </p>
      </div>
      <div className='booknow_bottom'>
        <div className='booknow_items'>
          {bookNowItems.map((item, i) => {
            return <BookNowCard {...item} />
          })}
          <img
            src='./dotstop.png'
            alt='dotstop'
            style={{ height: '50px', position: 'absolute', top: '-60px' }}
          />
          <img
            src='./dotsbottom.png'
            alt='dotsbottom'
            style={{
              height: '20px',
              position: 'absolute',
              bottom: '-25px',
              right: 0,
            }}
          />
          <img
            src='./dotsside.png'
            alt='dotsside'
            style={{
              height: '300px',
              width: '15px',
              position: 'absolute',
              bottom: 0,
              right: '-5px',
            }}
          />
        </div>
        <div className='book_bottom_small'>
          <img
            src='./arrow2.svg'
            alt='itemsnextarrow'
            className='itemsnextarrow'
          />
          <p className='see_more'>see more</p>
        </div>
      </div>
    </div>
  )
}

export default BookNow
