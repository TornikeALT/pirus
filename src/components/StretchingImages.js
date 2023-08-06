import smartwatch from '../images/smartwatch.jpg'
import gschock from '../images/gshock.jpg'
import gschocktwo from '../images/gshock2.jpg'
import headset from '../images/headset.jpg'
import mac from '../images/mac.jpg'
import flamencos from '../images/flamencosmall.jpg'
import { useState, useRef, useEffect } from 'react'
import '../styles/StretchingImages.css'



function StretchingImages() {
    const [hoverImage, setHoverImage] = useState(null);
    const sectionRef = useRef();
    const bottomLineRef = useRef()
    const [animateFromLeft, setAnimateFromLeft] = useState(false);
    const [animateFromBot, setAnimateFromBot] = useState(false)




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


    useEffect(() => {
        const currentSectionRef = sectionRef.current
        const sectionObserver = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting && !animateFromLeft) {
                setAnimateFromLeft(true)
                sectionObserver.unobserve(entry.target)
            }
        },
            { threshold: 0.2 });

        if (currentSectionRef) {
            sectionObserver.observe(currentSectionRef)
        }
        return () => {
            if (currentSectionRef) {
                sectionObserver.unobserve(currentSectionRef)
            }
        }

    }, [animateFromLeft])


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






    return <section className='works_section ' ref={sectionRef}>
        <div className='works_container'>
            <div style={{ marginBottom: '5rem' }} className='works_wrap'>
                <div className={`works_title_wrapper ${animateFromLeft ? 'animate' : ''}`} style={{ opacity: animateFromLeft ? 1 : 0 }}>
                    <div className="line_box">
                        <span className='horizontal_line'></span>
                    </div>
                    <h2>Works.</h2>
                </div>
                <p className={`things_we_made ${animateFromLeft ? 'animate_2' : ''}`} style={{ opacity: animateFromLeft ? 1 : 0 }}>THINGS WE'VE MADE</p>
            </div>
            <div className='view_all_btn'>
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
        <div className={`vertical_line_wrapper ${animateFromBot ? 'animate_3' : ''}`} style={{ opacity: animateFromBot ? 1 : 0 }} ref={bottomLineRef}>
            <span className='vertical_line'></span>
        </div>

    </section>
}

export default StretchingImages;


