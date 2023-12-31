import '../styles/OurService.css'
import { BsBarChart, BsPencil, BsGlobe, BsBookmark } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { FaUncharted } from 'react-icons/fa'
import useIntersectionObserver from '../hooks/useIntersectionObserver'




function OurServices() {
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.2)
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.8)

    return (
        <section ref={ref1} className='our_service_section'>
            <div className='container'>
                <div className={`our_service_title ${animate1 ? 'animate_news ' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>
                    <h2>Our Services.</h2>
                    <p>OUR SERVICES FOR CLIENTS</p>
                </div>

                <div className='services'>
                    <div className='service_box'>
                        <BsBarChart size={40} color='aqua' />
                        <span>Digital Strategy</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</p>
                    </div>
                    <div className='service_box'>
                        <BsPencil size={40} color='aqua' />
                        <span>UX Designs</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</p>
                    </div>
                    <div className='service_box selected'>
                        <HiUsers size={40} color='black' />
                        <span>UI Designs</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</p>
                    </div>
                    <div className='service_box'>
                        <BsGlobe size={40} color='aqua' />
                        <span>Social Media</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</p>
                    </div>
                    <div className='service_box'>
                        <BsBookmark size={40} color='aqua' />
                        <span>Design Concept</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</p>
                    </div>
                    <div className='service_box'>
                        <FaUncharted size={40} color='aqua' />
                        <span>Media Pairing</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</p>
                    </div>
                </div>
                <div className={`vertical_line_wrapper ${animate2 ? 'animate_3' : ''}`} style={{ opacity: animate2 ? 1 : 0 }} ref={ref2}>
                    <span className='vertical_line'></span>
                </div>
            </div>
        </section >);
}

export default OurServices;