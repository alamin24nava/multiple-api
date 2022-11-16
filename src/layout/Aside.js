import React, { useEffect, useState } from "react";

import { FiHome } from "react-icons/fi";
import { FiLifeBuoy } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiSidebar, FiBookmark } from "react-icons/fi";
import { useLocation } from 'react-router-dom';

export default function Aside(props) {
    const expanded = props.expanded;
    const activeMenu = useLocation().pathname;

    return (
        <aside
            className={
                expanded ? "theme-aside-bar" : "theme-aside-bar expand"
            }
        >
            <a className="navbar-brand" href="/">
                <svg
                    className="overflow-visible text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="32"
                    height="32"
                >
                    <path d="M 4 4 L 44 4 L 44 44 Z" fill="currentColor"></path>
                    <path d="M 4 4 L 34 4 L 24 24 Z" fill="currentColor"></path>
                    <path className="text-success" d="M 4 4 L 24 4 L 4  44 Z" fill="currentColor"></path>
                </svg>
                <span className={expanded ? "hide-nav-txt" : "text-dark show-nav-txt"}>
                    Flatkit
                </span>
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a href="/" className={"nav-link " + (activeMenu === '/' ? 'active' : '')}>
                        <FiHome className={"fs-4 overflow-visible"} />{" "}
                        <span className={expanded ? "hide-nav-txt" : "show-nav-txt"}>Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/countries" className={"nav-link " + (activeMenu === '/countries' ? 'active' : '')}>
                        <FiBookmark className={"fs-4 overflow-visible"} />{" "}
                        <span className={expanded ? "hide-nav-txt" : "show-nav-txt"}>Countries</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/todo" className={"nav-link " + (activeMenu === '/todo' ? 'active' : '')}>
                        <FiLifeBuoy className={"fs-4 overflow-visible"} />{" "}
                        <span className={expanded ? "hide-nav-txt " : "show-nav-txt"}>Todos</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/todo">
                        <FiEdit className={"fs-4 overflow-visible"} />{" "}
                        <span className={expanded ? "hide-nav-txt " : "show-nav-txt"}>Forms</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/todo">
                        <FiSidebar className={"fs-4 overflow-visible"} />{" "}
                        <span className={expanded ? "hide-nav-txt " : "show-nav-txt"}>Tables</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
