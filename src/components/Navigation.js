import { Link } from "react-router-dom";
import pirus from '../images/pirus.png'
import '../styles/Navigation.css'
import { useState } from "react";


function Navigation() {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleDropDownMenu = () => {
        setShowDropDown(!showDropDown)
    }


    return <header>
        <div className="wrapper flex">
            <div>
                <a href="#">
                    <img src={pirus} alt="pirus" className="pirus_logo" />
                </a>
            </div>
            <div>
                <nav>
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
                </nav>
            </div>
        </div>
    </header>
}

export default Navigation;