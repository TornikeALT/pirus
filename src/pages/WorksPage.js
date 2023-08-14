import { useState } from "react";
import { OUR_WORKS_DATA } from "../data/ourWorksData";
import '../styles/WorksPage.css'
import useIntersectionObserver from "../hooks/useIntersectionObserver";
function WorksPage() {
    const [category, setCategory] = useState('all')
    const { animate, currentRef } = useIntersectionObserver(0.2)

    const handleCategoryClick = (clicked) => {
        setCategory(clicked)
    }

    return (
        <section className="worksPageSection" >
            <div className="works_page_wrapper" ref={currentRef}>
                <div className={`works_title ${animate ? 'animate_news ' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                    <h2>Our Works.</h2>
                    <p>SEE ALL OUR WORKS</p>
                </div>
                <div className="workpage_nav">
                    <ul style={{ display: 'flex', gap: '1rem' }}>
                        <li className={`${category === 'all' ? 'works_active' : ''}`}>
                            <a onClick={() => handleCategoryClick('all')}>ALL</a>
                        </li>
                        <li className={`${category === 'photography' ? 'works_active' : ''}`}>
                            <a onClick={() => handleCategoryClick('photography')}>PHOTOGRAPHY</a>
                        </li>
                        <li className={`${category === 'architecture' ? 'works_active' : ''}`}>
                            <a onClick={() => { handleCategoryClick('architecture') }}> ARCHITECTURE</a>
                        </li>
                        <li className={`${category === 'design' ? 'works_active' : ''}`}>
                            <a onClick={() => { handleCategoryClick('design') }}> DESIGN</a>
                        </li>
                    </ul>
                </div>
                <div className="works_card_wrapper">
                    {OUR_WORKS_DATA.map((element) => {
                        if (category === 'all' || element.category === category) {
                            return (<div key={element.id} className="works_card">
                                <div className="overlay">
                                    <p>{element.title}</p>
                                </div>
                                <img src={element.img} alt={element.title} />
                            </div>)
                        }
                    })
                    }
                </div>
            </div>
        </section>

    )
}

export default WorksPage;