
import { FaRegPaperPlane } from 'react-icons/fa'
import { PiBrainLight } from 'react-icons/pi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import '../styles/Home.css'




function Home() {
    return <section>
        <div className='bg'>
            <div className="container">
                <div className='titles'>
                    <div className='top_title'>
                        <p>CREATIVE MIND, CREATIVE WORKS.</p>
                    </div>
                    <div className='middle_title'>
                        <h1>
                            We are digital <br />
                            agency.
                        </h1>
                    </div>
                    <div className='getting_started'>
                        <span>GETTING STARTED</span>
                    </div>
                </div>
                <div className='widgets'>
                    <div className='widgets_content'>
                        <FaRegPaperPlane color='aqua' size={45} />
                        <h4>Future Concept.</h4>
                        <div className='divider_box'>
                            <span className='divider'></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Ut elit tellus. </p>
                    </div>
                    <div className='widgets_content' style={{ border: '1px solid aqua' }}>
                        <PiBrainLight color='aqua' size={45} />
                        <h4>The Big Ideas.</h4>
                        <div className='divider_box'>
                            <span className='divider'></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Ut elit tellus. </p>
                    </div>
                    <div className='widgets_content'>
                        <HiOutlineLightBulb color='aqua' size={45} />
                        <h4>Creative Solutions.</h4>
                        <div className='divider_box'>
                            <span className='divider'></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. Ut elit tellus. </p>
                    </div>
                </div>
                <span className='tail'></span>
            </div>
        </div>

    </section>
}

export default Home;