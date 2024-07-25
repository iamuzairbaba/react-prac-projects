import React from 'react'
import menus from './data'
import './navmenu.css'
import Menulist from './Menulist'

const Navmenu = ({ menus = [] }) => {
  return (
    <div className='navmenu-container'>
        <Menulist list={menus}/>
    </div>
  )
}

export default Navmenu