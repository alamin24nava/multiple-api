import React from 'react'

import { FiHome } from "react-icons/fi";
import { FiLifeBuoy } from "react-icons/fi";

export default function Aside(props) {
    const expandSideBar = props.expandSideBar
    console.log(expandSideBar)
    return (
        <aside className={expandSideBar ? 'theme-aside-bar bg-dark expand':'theme-aside-bar bg-dark'}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" href="/"><FiHome /> Countries</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/todo"><FiLifeBuoy /> Todo</a>
                </li>
            </ul>
        </aside>
    )
}
