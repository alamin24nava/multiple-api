import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";

export default function Header(props) {
    const [dropDown, setDropDown] = useState(false)
    const [expand, setExpand] = useState(false)
    const handleCollapse = ()=>{
        setExpand(!expand)
        props.onExpand(!expand)
    }
    return (
        <header className='theme-header'>
            <a className={expand ? 'navbar-brand':'navbar-brand expand'} href="#home" ui-scroll-to="home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                    <path d="M 4 4 L 44 4 L 44 44 Z" fill="#a88add"></path>
                    <path d="M 4 4 L 34 4 L 24 24 Z" fill="rgba(0,0,0,0.15)"></path>
                    <path d="M 4 4 L 24 4 L 4  44 Z" fill="#0cc2aa"></path>
                </svg>
                <span className={expand ? 'd-none':'text-white'}>Flatkit</span>
            </a>
            <div className='navbar-right'>
                <FiAlignJustify className='header-toggle fs-2 text-dark' onClick={handleCollapse} />
                <div className="dropdown">
                    <div className='user-wrap' onClick={()=> setDropDown(!dropDown)}>
                        <img src='http://flatfull.com/themes/angulr/html/img/a0.jpg' className='img-fluid rounded-circle'/>
                    </div>
                    <ul className={dropDown ? 'dropdown-menu show':'dropdown-menu'}>
                        <li><a className="dropdown-item" href="#">Propfile</a></li>
                        <li><a className="dropdown-item" href="#">Setting</a></li>
                        <li><a className="dropdown-item" href="#">Plan</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
