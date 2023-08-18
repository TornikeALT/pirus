import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import '../styles/OurTeam.css'
import memberOne from '../images/teammember-1.jpg'
import memberTwo from '../images/teammember-2.jpg'
import memberThree from '../images/teammember-3.jpg'
import memberFour from '../images/teammember-4.jpg'
import memberFive from '../images/teammember-5.jpg'

function OurTeam() {
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.4);
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.2)
    return (
        <section className="our_team_section" >
            <div className="container">
                <div className='service_title_wrapper' ref={ref1}>
                    <div className={`service_title ${animate1 ? 'animate' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>
                        <div className="line_box">
                            <span className='horizontal_line'></span>
                        </div>
                        <h2>Meet our team.</h2>
                    </div>
                    <p className={`for_clients ${animate1 ? 'animate_2' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>THE BEST PEOPLE TO SUPPORT YOUR PROJECT</p>
                </div>
            </div>
            <div className="team_members_wrapper" ref={ref2}>
                <div className={`member ${animate2 ? 'animate_image_appear_one' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                    <img src={memberFive} alt="Elizabet Lili" />
                    <div className="members_overlay">
                        <h4>Elizabet Lili</h4>
                        <h4>Designer</h4>
                        <div className="members_socials ">
                            <FaFacebookF size={20} />
                            <FaInstagram size={20} />
                            <FaLinkedinIn size={20} />
                        </div>
                    </div>

                </div>
                <div className={`member ${animate2 ? 'animate_image_appear_two' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                    <img src={memberFour} alt="Mercédesz Mihály" />
                    <div className="members_overlay">
                        <h4>Mercédesz Mihály</h4>
                        <h4>Designer</h4>
                        <div className="members_socials">
                            <FaFacebookF size={20} />
                            <FaInstagram size={20} />
                            <FaLinkedinIn size={20} />
                        </div>
                    </div>
                </div>

                <div className={`member ${animate2 ? 'animate_image_appear_three' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                    <img src={memberThree} alt="Ekwueme Mandla" />
                    <div className="members_overlay">
                        <h4> Ekwueme Mandla</h4>
                        <h4>Designer</h4>
                        <div className="members_socials">
                            <FaFacebookF size={20} />
                            <FaInstagram size={20} />
                            <FaLinkedinIn size={20} />
                        </div>
                    </div>
                </div>
                <div className={`member ${animate2 ? 'animate_image_appear_four' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                    <img src={memberTwo} alt="Božena Lívia" />
                    <div className="members_overlay">
                        <h4>   Božena Lívia</h4>
                        <h4>Designer</h4>
                        <div className="members_socials">
                            <FaFacebookF size={20} />
                            <FaInstagram size={20} />
                            <FaLinkedinIn size={20} />
                        </div>
                    </div>
                </div>
                <div className={`member ${animate2 ? 'animate_image_appear_five' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                    <img src={memberOne} alt="Veniamin Nikodim" />
                    <div className="members_overlay">
                        <h4>Veniamin Nikodim</h4>
                        <h4>Designer</h4>
                        <div className="members_socials">
                            <FaFacebookF size={20} />
                            <FaInstagram size={20} />
                            <FaLinkedinIn size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurTeam;