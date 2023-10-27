import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import NavbarLogo from '../../assets/home-navbar-img.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='navbar'>
            <button className='opener' onClick={() => { setOpen(!open) }}><i className="fa-solid fa-bars"></i></button>
            <div className={`navbar-item ${open && 'active'}`}>
                <div className="col first">
                    <NavLink to="/dashboard"><li className='active'>Главный</li></NavLink>
                    <NavLink to="/mentors"><li>Наставники</li></NavLink>
                    <NavLink to="/students"><li>Учащиеся</li></NavLink>
                    <NavLink to="/branches"><li>Ветви</li></NavLink>
                    <NavLink to="/report"><li>Отчет</li></NavLink>
                </div>
                <div className="col sec">
                    <NavLink to="/report"><li>Поддерживать</li></NavLink>
                    <NavLink to="/report"><li>Настройки</li></NavLink>
                    <NavLink to="/"><li className='logout' title='logout'><i className="fa-solid fa-right-from-bracket"></i></li></NavLink>
                </div>
                <button className='nav_closer' onClick={() => { setOpen(!open) }}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="navbar-logo">
                <img src={NavbarLogo} alt="navbar-logo" />
                <h1>Xisobot</h1>
            </div>
        </div>
    )
}

export default Navbar