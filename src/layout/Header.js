import React, { useState , useEffect} from 'react'
import { FiAlignJustify, FiMoon, FiSun } from "react-icons/fi";
import './style.css'
export default function Header(props) {

    const [dropDown, setDropDown] = useState(false)
    const [expand, setExpand] = useState(false)
    const [darkMode, setDarkMode] = useState(true)
    const [theme, setTheme] = useState('theme-dark')
    const handleCollapse = ()=>{
        setExpand(!expand)
    }
    const handleThemeMode = ()=>{
        setDarkMode(!darkMode)
        if(theme === 'theme-dark'){
            setTheme('theme-light')
        }else{
            setTheme('theme-dark')
        }
    }
    useEffect(() => {
        props.onExpand(expand)
        document.body.className = theme
    }, [expand, theme])
    return (
        <header className={expand ? 'theme-header':'theme-header theme-header-expand'}>

            <div className='navbar-right'>
                <FiAlignJustify className='header-toggle fs-2 text-primary' onClick={handleCollapse} />
                <div className='d-flex align-items-center gap-4'>
                    {
                        darkMode ? (<FiMoon className='fs-3 cursor-pointer text-primary transition' onClick={handleThemeMode}/>) : (<FiSun className='fs-3 cursor-pointer text-primary transition' onClick={handleThemeMode}/ >)
                    }
                    
                    <div className="dropdown">
                        <div className='user-wrap' onClick={()=> setDropDown(!dropDown)}>
                            <img src='http://flatfull.com/themes/angulr/html/img/a0.jpg' className='img-fluid rounded-circle'/>
                        </div>
                        <ul className={dropDown ? 'dropdown-menu show':'dropdown-menu'}>
                            <li><a className="dropdown-item" href="/profile">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Setting</a></li>
                            <li><a className="dropdown-item" href="#">Plan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
