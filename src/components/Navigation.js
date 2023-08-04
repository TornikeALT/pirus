import { Link } from "react-router-dom";
import pirus from '../images/pirus.png'
import { CgMenuGridR } from 'react-icons/cg'
import { BsXLg } from 'react-icons/bs'
import '../styles/Navigation.css'
import { useState } from "react";


function Navigation() {
    const [showDropDown, setShowDropDown] = useState(false)
    const [showMenu, setShowMenu] = useState(false)


    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }


    const handleDropDownMenu = () => {
        setShowDropDown(!showDropDown)
    }


    return <header>
        <div className="wrapper flex">
            <div>
                <a href="/">
                    <img src={pirus} alt="pirus" className="pirus_logo" />
                </a>
            </div>
            <div>
                <nav className="navigation">
                    <ul className="flex nav_links">
                        <li className="underline">
                            <Link to="/">Home</Link>
                        </li>
                        <li onMouseEnter={() => handleDropDownMenu(true)} onMouseLeave={() => handleDropDownMenu(false)} className="dropdown underline">
                            <Link to="/services">Services</Link>
                            {showDropDown && (
                                <ul className="dropdown_menu ">
                                    <li>
                                        <Link to="/service1">Service 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/service2">Service 2</Link>
                                    </li>
                                    <li>
                                        <Link to="/service3">Service 3</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="underline">
                            <Link to="/works">Works</Link>
                        </li>
                        <li className="underline">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="underline">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="underline">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {!showMenu && < div className="menu_icon" onClick={handleShowMenu}> <CgMenuGridR color="white" size={35} /></div>}
                    {showMenu && <div className="cancel_menu_icon" onClick={handleShowMenu}> <BsXLg color="white" size={35} /></div>}
                </nav>

            </div>
            {
                showMenu && <div className="vertical_menu">
                    <nav>

                        <ul>
                            <li className="underline_full">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="underline_full">
                                <Link to="/works">Works</Link>
                            </li>
                            <li className="underline_full">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="underline_full">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="underline_full">
                                <Link to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            }
        </div >
    </header >
}

export default Navigation;