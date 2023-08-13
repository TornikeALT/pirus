import useIntersectionObserver from "../hooks/useIntersectionObserver";
import '../styles/Footer.css'
import pirus from '../images/pirus.png'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsTelephone, BsFillEnvelopeAtFill, BsCalendar3 } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'

function Footer() {
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.2)
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.8)
    const { currentRef: ref3, animate: animate3 } = useIntersectionObserver(0.8)
    return (
        <section>
            <div className="footer_wrapper">
                <div className="inquiry">
                    <div className={`footer_vertical_line_wrapper ${animate1 ? 'animate_3' : ''}`} style={{ opacity: animate1 ? 1 : 0 }} ref={ref1}>
                        <span className='footer_vertical_line'></span>
                    </div>
                    <div className={`${animate3 ? 'animate_social_icons' : ''} social_icons`} ref={ref3} style={{ opacity: animate3 ? 1 : 0 }}>
                        <ul >
                            <li>
                                <a href="facebook.com">
                                    <BsFacebook size={40} color="aqua" />
                                </a>
                            </li>
                            <li>
                                <a href="twitter.com">
                                    <BsTwitter size={40} color="aqua" />
                                </a>
                            </li>
                            <li>
                                <a href="instagram.com">
                                    <BsInstagram size={40} color="aqua" />
                                </a>
                            </li>
                            <li>
                                <a href="youtube.com">
                                    <BsYoutube size={40} color="aqua" />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="project_in_mind">
                        <h2>
                            Have any project in mind?
                        </h2>
                    </div>
                    <div className={`${animate2 ? 'animate_inquiry_btn' : ''} inquiry_btn`} ref={ref2} style={{ opacity: animate2 ? 1 : 0 }}>
                        <a href="/#">MAKE INQUIRY</a>
                    </div>
                </div>
                <div className="footer_links">
                    <div className="pirus_wrapper">
                        <img src={pirus} alt="pirus" className="pirus" />
                        <p>We are more than a digital agency</p>
                        <div className="footer_line_box">
                            <span className='footer_horizontal_line'></span>
                        </div>
                    </div>
                    <div className="links">
                        <span>CONTACT US</span>
                        <ul className="contact_us">
                            <li>
                                <a href="/#"> <BsTelephone size={20} />
                                    <span>+1234567890</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#"> <BsFillEnvelopeAtFill size={20} />
                                    <span>anymail@mail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#"> <FiMapPin size={20} />
                                    <span>West Virginia, USA</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#"> <BsCalendar3 size={20} />
                                    <span>Monday to Friday</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <span>
                            OUR SERVICES
                        </span>
                        <ul>
                            <li>
                                <a href="/#">Single Project</a>
                            </li>
                            <li>
                                <a href="/#">Services</a>
                            </li>
                            <li>
                                <a href="/#">Works</a>
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <span>
                            ABOUT US
                        </span>
                        <ul>
                            <li>
                                <a href="/#">About</a>
                            </li>
                            <li>
                                <a href="/#">Blog</a>
                            </li>
                            <li>
                                <a href="/#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright flex">
                    <div>
                        <div className="flex privacy_wrapper">
                            <h4>Copyright 2023 All rights reserved</h4>
                            <a href="/#" className="privacy">PRIVACY POLICY
                            </a>
                            <a href="/#" className="privacy">
                                TERMS OF USE</a>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>
                    <div className="copyright_icons">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com">
                                    <BsFacebook size={20} color="white" />
                                </a>
                            </li>
                            <li>
                                <a href="twitter.com">
                                    <BsTwitter size={20} color="white" />
                                </a>
                            </li>
                            <li>
                                <a href="instagram.com">
                                    <BsInstagram size={20} color="white" />
                                </a>
                            </li>
                            <li>
                                <a href="youtube.com">
                                    <BsYoutube size={20} color="white" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Footer;




