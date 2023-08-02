import { Link } from "react-router-dom";
import pirus from '../images/pirus.png'
import '../styles/Navigation.css'


function Navigation() {
    return <header>
        <div className="wrapper flex">
            <div>
                <img src={pirus} alt="pirus" className="pirus_logo" />
            </div>
            <div>
                <nav>
                    <ul className="flex nav_links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/works">Works</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}

export default Navigation;