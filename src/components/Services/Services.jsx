import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services_container'>
      <div className='services_top'>
        <div className='top_left'>
          <div className='left_design' />
          <p className='left_text_services'>Our Services</p>
        </div>
        <p className='right_text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          molestias tempora aliquam? Necessitatibus fugiat eos impedit quis
          dolores officia molestiae maxime sit magnam reprehenderit non,
          explicabo doloribus voluptatum alias ut?
        </p>
      </div>
      <div className='items_container'>
        <div className='items_container_left'>
          <div className='item_in_detail'>
            <div className='image_bearer'>
              <img
                src='./iconpic2.svg'
                alt='iconpic1'
                className='image_bearing'
              />
            </div>
            <img
              src='./big-left-arrow.svg'
              alt='iconpic1'
              className='iconDetail image_bearing_arrow'
            />
            <div className='details_right'>
              <p className='item_detail_desc'>advanced table</p>
              <div className='detail_second_line'>
                <p className='item_detail_desc'>booking</p>
                <img src='./line.png' alt='line' className='line' />
              </div>
              <p className='item_detail_desc_sub'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo voluptate facere, aperiam unde
              </p>
            </div>
          </div>
          <div className='item_in_detail'>
            <div className='details_right even'>
              <p className='item_detail_desc'>Food for free</p>
              <div className='detail_second_line'>
                <img src='./line.png' alt='line' className='line' />
                <p className='item_detail_desc'>24/7</p>
              </div>
              <p className='item_detail_desc_sub swap'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo voluptate facere, aperiam unde
              </p>
            </div>
            <img
              src='./arrowRightIcon.png'
              alt='iconpic2'
              className='iconDetail secondIcon image_bearing_arrow'
            />
            <div className='image_bearer'>
              <img
                src='./iconpic3.svg'
                alt='iconpic1'
                className='second_line_image image_bearing'
              />
            </div>
          </div>
        </div>
        <div className='items_container_right'>
          <div className='image_bearer full'>
            <img
              src='./iconpic1.svg'
              alt='iconpic1'
              className='second_line_image image_bearing'
            />
            <p className='item_detail_desc'>
              free home delivery at your door steps
            </p>
            <p className='item_detail_desc_sub swap'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo voluptate facere, aperiam unde
            </p>
            <img src='./line.png' alt='line' className='line' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
