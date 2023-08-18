import '../styles/Skills.css'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import phoneTwo from '../images/phone-2.jpg'


function Skills() {
    const percentages = [{ title: 'UI DESIGN', percentage: 90 },
    { title: 'UX DESIGN', percentage: 60 },
    { title: 'DIGITAL MARKETING', percentage: 80 },
    { title: 'SOCIAL MEDIA', percentage: 70 }
    ];
    const { currentRef, animate } = useIntersectionObserver(0.4)

    return (
        <section className="skills_section" ref={currentRef}>
            <div className='container'>
                <div className='skills_wrapper'>
                    <div className="progress_container">
                        <h3 className={`${animate ? 'progress_title_animate' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                            Here are some of our great skills
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien.</p>
                        {percentages.map((element, index) => (
                            <div key={index} className="progress_item">
                                <div className='title_and_percentage'>
                                    <h4>{element.title} </h4>
                                    <span> {animate ? element.percentage : 0}%</span>
                                </div>
                                <div className="progress_bar">
                                    <div
                                        className={`${animate ? 'progress_fill' : ''}`}
                                        style={{ width: animate ? `${element.percentage}%` : '0%', backgroundColor: 'aqua', opacity: animate ? 1 : 0 }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className='thousand_projects'>
                            <span className='first_span'>1000+

                            </span>
                            <br />
                            <span className='second_span'> PROJECTS</span>
                        </div>
                        <img src={phoneTwo} alt="phone" className='phone_image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;