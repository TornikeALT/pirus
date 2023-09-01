import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { CgMenuGridR } from 'react-icons/cg'
import { BsXLg } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import pirus from '../images/pirus.png'
import '../styles/Navigation.css'
import aboutbg from '../images/workingplace.jpg'
import tatoogirl from '../images/tatoogirl.jpg'
import painting from '../images/painting.jpg'
import blog from '../images/blog.jpg'
import contact from '../images/contact.jpg'
import aboutbgsmall from '../images/workingplace-small.jpg'
import tatoogirlsmall from '../images/tatoogirl-small.jpg'
import paintingsmall from '../images/painting-small.jpg'
import blogsmall from '../images/blog-small.jpg'
import contactsmall from '../images/contact-small.jpg'


function Navigation() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [largeImageLoaded, setLargeImageLoaded] = useState(false);
    const location = useLocation();

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleDropDownMenu = () => {
        setShowDropDown(!showDropDown)
    }

    const getBackgroundImage = () => {
        let backgroundImage = '';
        let backgroundImageSmall = ''
        let paddingBottom = 0;
        let title;

        if (location.pathname === '/') {
            backgroundImage = '';
            paddingBottom = 0;
        }
        if (location.pathname === '/about') {
            backgroundImage = aboutbg;
            backgroundImageSmall = aboutbgsmall;
            paddingBottom = '5.5rem';
            title = "About Us."
        }
        if (location.pathname === '/services') {
            backgroundImage = tatoogirl;
            backgroundImageSmall = tatoogirlsmall;
            paddingBottom = '5.5rem';
            title = "Services"
        }
        if (location.pathname === '/works') {
            backgroundImage = painting;
            backgroundImageSmall = paintingsmall;
            paddingBottom = '5.5rem';
            title = "Our works."
        }
        if (location.pathname === '/blog') {
            backgroundImage = blog;
            backgroundImageSmall = blogsmall;
            paddingBottom = '5.5rem';
            title = "Blog."
        }
        if (location.pathname === '/contact') {
            backgroundImage = contact;
            backgroundImageSmall = contactsmall;
            paddingBottom = '5.5rem';
            title = "Contact us."
        }

        return { backgroundImage, paddingBottom, title, backgroundImageSmall }
    }
    const { backgroundImage, paddingBottom, title, backgroundImageSmall } = getBackgroundImage();

    useEffect(() => {
        const largeImage = new Image();
        largeImage.onload = () => {
            setLargeImageLoaded(true);
        };
        largeImage.src = backgroundImage; // Load the large image

    }, [backgroundImage]);

    const headerBackGround = {
        backgroundImage: largeImageLoaded ? `url(${backgroundImage})` : `url(${backgroundImageSmall})`,
        backgroundSize: largeImageLoaded ? 'cover' : '100% auto',
        paddingBottom,
    }


    return (
        <header style={headerBackGround} className="header">
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
                                <NavLink to="/">HOME</NavLink>
                            </li>
                            <li onMouseEnter={() => handleDropDownMenu(true)} onMouseLeave={() => handleDropDownMenu(false)} className="dropdown underline">
                                <NavLink to="/services">SERVICES</NavLink>
                                {showDropDown && (
                                    <ul className="dropdown_menu">
                                        <li>
                                            <Link to="/service1">SERVICE 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/service2">SERVICE 2</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="underline">
                                <NavLink to="/works">WORKS</NavLink>
                            </li>
                            <li className="underline">
                                <NavLink to="/about">ABOUT</NavLink>
                            </li>
                            <li className="underline">
                                <NavLink to="/blog">BLOG</NavLink>
                            </li>
                            <li className="underline">
                                <NavLink to="/contact">CONTACT</NavLink>
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
                                    <NavLink to="/" onClick={handleShowMenu}>Home</NavLink>
                                </li>
                                <li className=" underline_full" onClick={handleDropDownMenu}>
                                    <div className="flex">
                                        <NavLink to="/services" onClick={handleShowMenu}>Services</NavLink> {showDropDown ? <IoIosArrowUp style={{ cursor: 'pointer' }} /> : < IoIosArrowDown style={{ cursor: 'pointer' }} />}
                                    </div>
                                    {showDropDown && (
                                        <ul >
                                            <li>
                                                <NavLink to="/service1">Service 1</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/service2">Service 2</NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="underline_full">
                                    <NavLink to="/works" onClick={handleShowMenu}>Works</NavLink>
                                </li>
                                <li className="underline_full">
                                    <NavLink to="/about" onClick={handleShowMenu}>About</NavLink>
                                </li>
                                <li className="underline_full">
                                    <NavLink to="/blog" onClick={handleShowMenu}>Blog</NavLink>
                                </li>
                                <li className="underline_full">
                                    <NavLink to="/contact" onClick={handleShowMenu}>Contact</NavLink>
                                </li>

                            </ul>
                        </nav>
                    </div>
                }
            </div >
            <h2 className="main_title">{title}</h2>
        </header >
    )
}

export default Navigation;