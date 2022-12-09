import React, { useState } from 'react';

import './navbar.css'

const Navbar = () => {

    const[burger_class, setBurgerClass]=useState("burger-bar unclicked")
    const[menu_class, setMenuClass]=useState("menu hidden")
    const[isMenuClicked, setIsMenuClicked]=useState(false)

    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{width: '100%', heigth: '100vh'}}>
            <nav>
                <div className='burger-menu'  onClick={updateMenu}>
                    <i className="burger_class fa-solid fa-bars"></i>
                </div>
                <div className={menu_class}>
                    <div className='menu-text'>
                        <a href="#home">HOME</a>
                        <a href="#about-me">ACERCA DE MÍ</a>
                        <a href="">HABILIDADES</a>
                        <a href="">PROYECTOS</a>
                        <a href="#contact">CONTACTO</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;