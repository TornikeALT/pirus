import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdPin } from 'react-icons/io'
import { CiMail } from 'react-icons/ci'

import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../styles/Contact.css'

function Contact() {
    const { currentRef, animate } = useIntersectionObserver(0.2)
    return (
        <section className="contact_section" ref={currentRef}>
            <div className='container'>
                <div className={`contacts_title ${animate ? 'animate_news ' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                    <h2>Get in touch with us!</h2>
                    <p>LOREM IPSUM DOLOR SIT AMET</p>
                </div>
                <div className='contact_info'>
                    <div className='contact_info_item'>
                        <BsFillTelephoneFill size={40} color='aqua' />
                        <h4>PHONE</h4>
                        <p>+1 234 567 890</p>
                        <p>+0 987 654 321</p>
                    </div>
                    <div className='contact_info_item side_borders'>
                        <IoMdPin size={40} color='aqua' />
                        <h4>ADDRESS</h4>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur adipiscing elit.</p>
                    </div>
                    <div className='contact_info_item'>
                        <CiMail size={40} color='aqua' />
                        <h4>EMAIL</h4>
                        <p>anymail@mail.com</p>
                        <p>officialmail@mail.com</p>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Contact;