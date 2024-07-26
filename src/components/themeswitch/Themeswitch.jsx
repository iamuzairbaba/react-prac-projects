import React from 'react'
import './themeswitch.css'
import useLocalStorage from './useLocalStorage'

const Themeswitch = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')
    const handleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  return (
    <div className='theme-container' data-theme={theme}>
        <div className='inner-theme'>
            <p>Hello World</p>
            <button onClick={handleChange}>Change Theme</button>
        </div>
    </div>
  )
}

export default Themeswitch