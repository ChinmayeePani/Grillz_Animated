import React from 'react'
import './Downloads.css'

const Downloads = () => {
  return (
    <div className='downloads_container'>
      <div className='main_downloads'>
        <div className='bar_line' />
        <div className='details_column'>
          <p className='left_text_downloads'>Download app for Exciting Deals</p>
          <p className='left_sub'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consequuntur ipsum necessitatibus ipsa
          </p>
          <div className='app_icons'>
            <img src='./App_Store_Badge.png' alt='app_store' />
            <img src='./google-play-badge.png' alt='play_store' />
          </div>
        </div>
      </div>
      <div className='side_downloads'>
        <img src='./app-screen.png' alt='app-screen' className='mobile' />
        <img
          src='./cauliflower.png'
          alt='cauliflower'
          className='cauliflower'
        />
        <img
          src='./dots-bg1.svg'
          alt='dots'
          className='dots_downloads'
        />
      </div>
    </div>
  )
}

export default Downloads
