import React, { useState } from 'react'
import './Topbar.css'
import { NAV_ITEMS } from '../../constants'
import { GiHamburgerMenu } from 'react-icons/gi'

const Topbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState('')
  const [subMenuCoordinates, setSubMenuCoordinates] = useState({ x: 0, y: 0 })
  const [subMenuHover, setSubMenuHover] = useState(false)
  const [hoveredMenuWithOptions, setHoveredMenuWithOptions] = useState(null)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleMenuHover = (menuItem) => {
    setHoveredMenu(menuItem.name)
    setHoveredMenuWithOptions(menuItem)

    const element = document.querySelector(`[data-name="${menuItem.name}"]`)
    const bounding = element?.getBoundingClientRect()
    setSubMenuCoordinates({ x: bounding?.left, y: bounding?.bottom })
  }

  return (
    <div className='topbar'>
      <div className='topbar_left'>
        <img src='./logo.svg' alt='logo' />
        <nav className='menu'>
          {NAV_ITEMS.map((menuItem, i) => {
            return (
              <React.Fragment key={i}>
                <button
                  key={i}
                  data-name={menuItem.name}
                  className='nav_items'
                  onMouseEnter={() => handleMenuHover(menuItem)}
                  onMouseLeave={() => setHoveredMenu('')}
                >
                  {menuItem.name}
                </button>
                {(hoveredMenu === menuItem.name || subMenuHover) &&
                  menuItem?.options && (
                    <div
                      className='submenu'
                      style={{
                        left: subMenuCoordinates?.x + 15,
                        top: subMenuCoordinates?.y,
                      }}
                      onMouseEnter={() => setSubMenuHover(true)}
                      onMouseLeave={() => setSubMenuHover(false)}
                    >
                      {menuItem.options &&
                        hoveredMenuWithOptions.options?.map((option, j) => (
                          <p key={j} className='submenu_items'>
                            {option}
                          </p>
                        ))}
                    </div>
                  )}
              </React.Fragment>
            )
          })}
        </nav>
      </div>
      <div className='topbar_right'>
        <div class='avatar_with_badge'>
          <img src='./userpic.png' alt='avatar' className='menu_avatar' />
          <div />
        </div>
        <button className='profile_select'>
          User
          <img src='./caret-down.svg' alt='caret-down' />
        </button>
      </div>
      {openMobileMenu ? (
        <svg
          onClick={() => setOpenMobileMenu(false)}
          className='mobile_control'
          viewBox='0 0 50 50'
          width='35px'
          height='35px'
          stroke='#000000'
          fill='#000000'
        >
          <path d='M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z' />
        </svg>
      ) : (
        <GiHamburgerMenu
          className='mobile_control'
          onClick={() => setOpenMobileMenu(true)}
        />
      )}
      <div data-menu='mobile-menu-wrapper' className='mobile_menu_wrapper'>
        {openMobileMenu && (
          <div className='mobie_menu_items_container'>
            {NAV_ITEMS.map((headerItem, i) => {
              return (
                <div key={i}>
                  <div className='mobie_menu_item'>
                    <p className='text-xs'>{headerItem.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Topbar
