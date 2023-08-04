import { useState, useEffect, useRef } from 'react'
import '../styles/Service.css'
import { BsBarChart, BsPencil, BsGlobe, BsBookmark } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { FaUncharted } from 'react-icons/fa'


function Service() {
    const serviceSectionRef = useRef(null);
    const bottomLineRef = useRef(null)
    const [animateFromLeft, setAnimateFromLeft] = useState(false);
    const [animateFromBot, setAnimateFromBot] = useState(false)

    // Observer For Left Animation
    useEffect(() => {
        const currentRefValue = serviceSectionRef.current;
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !animateFromLeft) {
                    setAnimateFromLeft(true);
                    sectionObserver.unobserve(entry.target);

                }
            },
            { threshold: 0.2 }
        );

        if (currentRefValue) {
            sectionObserver.observe(currentRefValue);
        }

        return () => {
            if (currentRefValue) {
                sectionObserver.unobserve(currentRefValue);
            }
        };
    }, [animateFromLeft]);

    // Observer For Bottom Animation
    useEffect(() => {
        const currentBotRefValue = bottomLineRef.current
        const bottomLineObserver = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !animateFromBot) {
                    setAnimateFromBot(true);
                    bottomLineObserver.unobserve(entry.target);

                }
            },
            { threshold: 0.8 }
        );

        if (currentBotRefValue) {
            bottomLineObserver.observe(currentBotRefValue);
        }

        return () => {
            if (currentBotRefValue) {
                bottomLineObserver.unobserve(currentBotRefValue);
            }
        };
    }, [animateFromBot]);


    return <section id="service-section" ref={serviceSectionRef}>
        <div className='container'>
            <div className='service_title_wrapper'>
                <div className={`service_title ${animateFromLeft ? 'animate' : ''}`} style={{ opacity: animateFromLeft ? 1 : 0 }}>
                    <div className="line_box">
                        <span className='horizontal_line'></span>
                    </div>
                    <h2>Services.</h2>
                </div>
                <p className={`for_clients ${animateFromLeft ? 'animate_2' : ''}`} style={{ opacity: animateFromLeft ? 1 : 0 }}>OUR SERVICES FOR CLIENTS</p>
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
            <div className={`vertical_line_wrapper ${animateFromBot ? 'animate_3' : ''}`} style={{ opacity: animateFromBot ? 1 : 0 }} ref={bottomLineRef}>
                <span className='vertical_line'></span>
            </div>
        </div>
    </section >
}

export default Service;
