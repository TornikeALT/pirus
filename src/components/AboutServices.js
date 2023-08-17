import '../styles/AboutServices.css'
import { CgIfDesign } from 'react-icons/cg'
import { BsFastForwardCircle, BsEmojiSmile } from 'react-icons/bs'
import { GiAlarmClock } from 'react-icons/gi'
import { CiLocationArrow1 } from 'react-icons/ci'
import { BiLike } from 'react-icons/bi'
import useIntersectionObserver from '../hooks/useIntersectionObserver'


function AboutServices() {
    const { currentRef, animate } = useIntersectionObserver(0.8)
    return (
        <section className='about_services_section'>
            <div className="container">
                <div className='about_services_wrapper'>
                    <div>
                        <div className='about_services_grid_item'>
                            <CgIfDesign color='aqua' size={40} />
                            <h4>Excellent Design</h4>
                            <p>Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.</p>
                        </div>
                        <div className='about_services_grid_item'>
                            <CiLocationArrow1 color='aqua' size={40} />
                            <h4>Personal Support</h4>
                            <p>Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.</p>
                        </div>
                    </div>
                    <div>
                        <div className='about_services_grid_item'>
                            <BsFastForwardCircle color='aqua' size={40} />
                            <h4>Fast Response</h4>
                            <p>Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.</p>
                        </div>
                        <div className='about_services_grid_item'>
                            <BsEmojiSmile color='aqua' size={40} />
                            <h4>Best Quality</h4>
                            <p>Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.</p>
                        </div>
                    </div>
                    <div>
                        <div className='about_services_grid_item'>
                            <GiAlarmClock color='aqua' size={40} />
                            <h4>Time Saving</h4>
                            <p>Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.</p>
                        </div>
                        <div className='about_services_grid_item'>
                            <BiLike color='aqua' size={40} />
                            <h4>Perfect Solutions</h4>
                            <p>Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.</p>
                        </div>
                    </div>

                </div>
                <div className={`vertical_line_wrapper ${animate ? 'animate_3' : ''}`} style={{ opacity: animate ? 1 : 0 }} ref={currentRef}>
                    <span className='vertical_line'></span>
                </div>
            </div>

        </section >
    )
}

export default AboutServices;