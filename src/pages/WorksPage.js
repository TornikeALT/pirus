import React, { useState } from "react";
import { OUR_WORKS_DATA } from "../data/ourWorksData";
import '../styles/WorksPage.css'
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function WorksPage() {
    const { animate, currentRef } = useIntersectionObserver(0.2);
    const [category, setCategory] = useState('all');

    const handleCategoryClick = (clicked) => {
        setCategory(clicked);
    }

    const filteredWorks = category === 'all' ? OUR_WORKS_DATA : OUR_WORKS_DATA.filter(work => work.category === category);

    return (
        <section className="worksPageSection">
            <div className="works_page_wrapper" ref={currentRef}>
                <div className={`works_title ${animate ? 'animate_news' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                    <h2>Our Works.</h2>
                    <p>SEE ALL OUR WORKS</p>
                </div>
                <div className="workpage_nav">
                    <ul style={{ display: 'flex', gap: '1rem' }}>
                        {['all', 'photography', 'architecture', 'design'].map(cat => (
                            <li
                                key={cat}
                                className={category === cat ? 'works_active' : ''}
                                onClick={() => handleCategoryClick(cat)}
                            >
                                {cat.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="works_card_wrapper">
                    {filteredWorks.map(element => (
                        <div key={element.id} className="works_card">
                            <div className="overlay">
                                <p>{element.title}</p>
                            </div>
                            <img src={element.img} alt={element.title} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorksPage;
