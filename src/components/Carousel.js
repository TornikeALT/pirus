import { useEffect, useState } from "react";
import '../styles/Carousel.css'
import { DATA } from "../data/data";
import { AiFillStar } from 'react-icons/ai'
import { PiQuotes } from 'react-icons/pi'
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import a from '../images/icons/a.png'
import anotherm from '../images/icons/anotherm.png'
import aude from '../images/icons/aude.png'
import digg from '../images/icons/digg.png'
import lines from '../images/icons/lines.png'
import m from '../images/icons/m.png'
import shark from '../images/icons/shark.png'



function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { currentRef: ref1, animate: animate1 } = useIntersectionObserver(0.2);
    const { currentRef: ref2, animate: animate2 } = useIntersectionObserver(0.8)
    const [itemsPerSlide, setItemsPerSlide] = useState(4);
    const [bulletsToShow, setBulletsToShow] = useState(DATA.length);


    // Auto slide Carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % 4)
        }, 10000);
        return () => clearInterval(interval)
    }, [activeIndex])

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setItemsPerSlide(4);
            setBulletsToShow(4);
        } else if (window.innerWidth >= 768) {
            setItemsPerSlide(2);
            setBulletsToShow(6);
        } else {
            setItemsPerSlide(1);
            setBulletsToShow(DATA.length);
        }
    };

    useEffect(() => {

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className="carousel_container" ref={ref1}>

            <div style={{ marginBottom: '5rem' }} className='testimonials_container'>
                <div className={`testimonials_wrapper ${animate1 ? 'animate' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>
                    <div className="line_box">
                        <span className='horizontal_line'></span>
                    </div>
                    <h2>Testimonials.</h2>
                </div>
                <p className={`things_we_made ${animate1 ? 'animate_2' : ''}`} style={{ opacity: animate1 ? 1 : 0 }}>WE ARE MORE THAN DIGITAL AGENCY
                </p>
            </div>
            <div className="carousel_items">
                {DATA.slice(activeIndex, activeIndex + itemsPerSlide).map((item, index) => (  //
                    <div key={index} className="carousel_item">
                        <PiQuotes color="#66fcf15e" size={40} />
                        <p>{item.text}</p>
                        <div>
                            <ul>
                                <li>
                                    <a href="/#">
                                        <AiFillStar color="#fec42d" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <AiFillStar color="#fec42d" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <AiFillStar color="#fec42d" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <AiFillStar color="#fec42d" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <AiFillStar color="#fec42d" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <img src={item.img} alt={index} />
                        <div className="name_with_surname">
                            <h3 >{item.name}</h3>
                            <span>Designation</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel_bullets">
                {DATA.slice(0, bulletsToShow).map((_, index) => (          //controll how Many Bullets to show
                    <div
                        key={index}
                        className={`carousel_bullet ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}

            </div>
            <div className="icons">
                <img src={anotherm} alt="a character" />
                <img src={aude} alt="like audi" />
                <img src={digg} alt="digg" />
                <img src={shark} alt="shark" />
                <img src={lines} alt="lines" />
                <img src={m} alt="m character" />
                <img src={a} alt="a character" />
            </div>
            <div ref={ref2} className={`vertical_line_wrapper ${animate2 ? 'animate_3' : ''}`} style={{ opacity: animate2 ? 1 : 0 }} >
                <span className='vertical_line'></span>
            </div>

        </section>
    );
};
export default Carousel;
