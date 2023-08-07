import smartwatch from '../images/smartwatch.jpg'
import gschock from '../images/gshock.jpg'
import gschocktwo from '../images/gshock2.jpg'
import headset from '../images/headset.jpg'
import mac from '../images/mac.jpg'
import flamencos from '../images/flamencosmall.jpg'
import { useState } from 'react'
import '../styles/StretchingImages.css'
import useIntersectionObserver from '../hooks/useIntersectionObserver'



function StretchingImages() {
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.2);
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.8)
    const [hoverImage, setHoverImage] = useState(null);


    const images =
        [{ img: smartwatch, text: 'Smart Watch' },
        { img: gschock, text: 'The UX Designs' },
        { img: headset, text: 'Mockup' },
        { img: mac, text: 'The UI Design' },
        { img: gschocktwo, text: 'One Product' },
        { img: flamencos, text: 'The UX Designs' }
        ]


    const handleMouseOver = (index) => {
        setHoverImage(index)
    }

    const handleMouseOut = () => {
        setHoverImage(null)
    }


    return <section className='works_section ' ref={ref1}>
        <div className='works_container'>
            <div style={{ marginBottom: '5rem' }} className='works_wrap'>
                <div className={`works_title_wrapper ${animate1 ? 'animate' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>
                    <div className="line_box">
                        <span className='horizontal_line'></span>
                    </div>
                    <h2>Works.</h2>
                </div>
                <p className={`things_we_made ${animate1 ? 'animate_2' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>THINGS WE'VE MADE</p>
            </div>
            <div className='view_all_btn' style={{ opacity: animate1 ? 1 : 0 }}>
                View All
            </div>
        </div>
        <div>
            <div className='image_gallery'>

                {images.map((element, index) => {

                    return <div className='img_content' key={index} >
                        <img src={element.img} alt={element.text} className={`images ${hoverImage === index ? 'enlarge' : ''}`} onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseOut} />
                        <span onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseOut}  > {element.text}</span>
                    </div>

                })}
            </div>

        </div>
        <div className={`vertical_line_wrapper ${animate2 ? 'animate_3' : ''}`} style={{ opacity: animate2 ? 1 : 0 }} ref={ref2}>
            <span className='vertical_line'></span>
        </div>

    </section>
}

export default StretchingImages;


