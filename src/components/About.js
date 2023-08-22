import table from '../images/table.jpg';
import philosophy from '../images/philosophy.jpg';
import teamwork from '../images/teamwork.jpg';
import '../styles/About.css'
import useIntersectionObserver from "../hooks/useIntersectionObserver";


function About() {
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.2);
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.8);
    const { currentRef: ref3, animate: animate3 } = useIntersectionObserver(0.8)


    return (
        <section ref={ref1} className="about_section">
            <div className="container">
                <div className='about_title_wrapper'>
                    <div className={`about_title ${animate1 ? 'animate' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>
                        <div className="line_box">
                            <span className='horizontal_line'></span>
                        </div>
                        <h2>About</h2>
                    </div>
                    <p className={`for_clients ${animate1 ? 'animate_2' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>WE ARE MORE THAN DIGITAL AGENCY</p>
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
                <div className="topics" ref={ref2}>
                    <div className={`border_right ${animate2 ? 'animate_3' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                        <h3>Who Are We</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className={`${animate2 ? 'animate_bot_2' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                        <h3>Our philosophy</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div style={{ opacity: animate2 ? 1 : 0 }} className={`border_left ${animate2 ? 'animate_bot_3' : ''}`}>
                        <h3>How we work</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                </div>
                <div ref={ref3} className={`vertical_line_wrapper ${animate3 ? 'animate_3' : ''}`} style={{ opacity: animate3 ? 1 : 0 }} >
                    <span className='vertical_line'></span>
                </div>
            </div>

        </section>
    )
}

export default About;