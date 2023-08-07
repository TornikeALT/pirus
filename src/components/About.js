import { useRef, useEffect, useState } from "react";
import table from '../images/table.jpg';
import philosophy from '../images/philosophy.jpg';
import teamwork from '../images/teamwork.jpg';
import '../styles/About.css'


function About() {
    const serviceSectionRef = useRef();

    const topicsRef = useRef()
    const [animateFromLeft, setAnimateFromLeft] = useState(false);
    const [animateFromBot, setAnimateFromBot] = useState(false)

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


    useEffect(() => {
        const currentTopicsRef = topicsRef.current
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

        if (currentTopicsRef) {
            bottomLineObserver.observe(currentTopicsRef);
        }

        return () => {
            if (currentTopicsRef) {
                bottomLineObserver.unobserve(currentTopicsRef);
            }
        };
    }, [animateFromBot]);





    return <section ref={serviceSectionRef} className="about_section">
        <div className="container">
            <div className='service_title_wrapper'>
                <div className={`service_title ${animateFromLeft ? 'animate' : ''}`} style={{ opacity: animateFromLeft ? 1 : 0 }}>
                    <div className="line_box">
                        <span className='horizontal_line'></span>
                    </div>
                    <h2>About</h2>
                </div>
                <p className={`for_clients ${animateFromLeft ? 'animate_2' : ''}`} style={{ opacity: animateFromLeft ? 1 : 0 }}>WE ARE MORE THAN DIGITAL AGENCY</p>
            </div>
            <div className="image_container">
                <div className="full-height-image">
                    <img src={philosophy} alt="philosophy" />
                    <span className="image_content">
                        <h2> Team Work</h2>
                        <p>Committed and creative</p>
                    </span>
                </div>
                <div className="stacked-images">
                    <div className="right_image">
                        <img src={teamwork} alt="team work" />
                        <span className="right_image_content">
                            <h2>Office</h2>
                            <p> Somewhere on earth</p>
                        </span>
                    </div>

                    <div className="right_image">
                        <img src={table} alt="table" />
                        <span className="right_image_content">
                            <h2>Office</h2>
                            <p> Somewhere on earth</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="topics" ref={topicsRef}>
                <div className={`border_right ${animateFromBot ? 'animate_3' : ''}`} style={{ opacity: animateFromBot ? 1 : 0 }}>
                    <h3>Who Are We</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className={`${animateFromBot ? 'animate_bot_2' : ''}`} style={{ opacity: animateFromBot ? 1 : 0 }}>
                    <h3>Our philosophy</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div style={{ opacity: animateFromBot ? 1 : 0 }} className={`border_left ${animateFromBot ? 'animate_bot_3' : ''}`}>
                    <h3>How we work</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>
            <div className="vertical_line_wrapper" style={{ opacity: animateFromBot ? 1 : 0 }} >
                <span className='vertical_line'></span>
            </div>
        </div>

    </section>
}

export default About;