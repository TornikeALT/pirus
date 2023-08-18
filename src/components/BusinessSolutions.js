import { BsFillPlayFill } from 'react-icons/bs'
import macbook from '../images/bookandmac.jpg'
import '../styles/BusinessSolutions.css'
import useIntersectionObserver from '../hooks/useIntersectionObserver';


function BusinessSolutions() {
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.4);
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.2);
    const { currentRef: ref3, animate: animate3 } = useIntersectionObserver(0.8);
    return (
        <section className='business_solutions_section'>
            <div className='container'>
                <div className='business_solutions_wrapper'>
                    <div>
                        <img src={macbook} alt="macbook" />
                    </div>
                    <div className='business_solutions_right_box' style={{ opacity: animate1 ? 1 : 0 }}>
                        <h3 className={`${animate1 ? 'business_solutions_animate_title' : ''}`} ref={ref1}>Best Solutions for <br /> Your Business</h3>
                        <p className={`${animate2 ? 'business_solutions_animate_content' : ''}`} ref={ref2} style={{ opacity: animate2 ? 1 : 0 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet urna quis odio vehicula consectetur. Donec eu gravida diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec tincidunt quis dolor eget consectetur. Suspendisse a mollis lacus.
                        </p>
                        <div className={`watch_video_btn ${animate3 ? 'business_solutions_animate_watch_btn' : ''}`} ref={ref3} style={{ opacity: animate3 ? 1 : 0 }}>
                            <a href="/#">   <BsFillPlayFill size={25} /> <span >
                                WATCH VIDEO</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessSolutions;