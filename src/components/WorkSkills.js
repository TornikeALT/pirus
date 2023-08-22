import '../styles/WorksSkills.css'
import useIntersectionObserver from '../hooks/useIntersectionObserver';


function WorkSkills() {
    const percentages = [{ title: 'UI DESIGN', percentage: 90 },
    { title: 'UX DESIGN', percentage: 60 },
    { title: 'DIGITAL MARKETING', percentage: 80 },
    { title: 'SOCIAL MEDIA', percentage: 70 }
    ];
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.4);
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.5)
    return (
        <section className="works_skills_section" >
            <div>
                <div className='service_works_title_wrapper' ref={ref1}>
                    <div className={`${animate1 ? 'works_hidden_title' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>
                        <h3>Wanna see our works?</h3>
                        <div className='all_projects_btn'>
                            <a href="/#">All Projects</a>
                        </div>
                    </div>
                </div>
                <div className='work_skills_wrapper' ref={ref2}>
                    <div className='great_skills'>
                        <h3 className={`${animate2 ? 'progress_title_animate' : ''}`} style={{ opacity: animate2 ? 1 : 0 }}>
                            Here are some of our great skills
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam.</p>
                    </div>
                    <div className="works_progress_container">

                        {percentages.map((element, index) => (
                            <div key={index} className="works_progress_item">
                                <div className='title_and_percentage'>
                                    <h4>{element.title} </h4>
                                    <span> {animate2 ? element.percentage : 0}%</span>
                                </div>
                                <div className="works_progress_bar">
                                    <div
                                        className={`${animate2 ? 'progress_fill' : ''}`}
                                        style={{ width: animate2 ? `${element.percentage}%` : '0%', backgroundColor: 'aqua', opacity: animate2 ? 1 : 0 }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WorkSkills;

