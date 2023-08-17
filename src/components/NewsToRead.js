import '../styles/NewsToRead.css'
import vrwoman from '../images/vrwoman.jpg'
import buildings from '../images/design.jpg'
import envelope from '../images/thanks.jpg'
import useIntersectionObserver from '../hooks/useIntersectionObserver'


function NewsToRead() {
    const { currentRef, animate } = useIntersectionObserver(0.2)

    return (
        <section className='news_to_read_section' ref={currentRef}>
            <div className="newstoread_container">
                <div className={`news_title ${animate ? 'animate_news ' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                    <h2>Latest News.</h2>
                    <p>CHECK OUT SOME OF OUR NEWS</p>
                </div>
                <div className='news_wrapper'>
                    <article className='news_card'>
                        <img src={vrwoman} alt="woman with vr" />
                        <h3>Could this VR sketching tool be coming of age for designers in the future?</h3>
                        <p className='news_card_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_wrapper'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                    <article className='news_card'>
                        <img src={buildings} alt="buildings from above" />
                        <h3>8 Cities That Show You What The Future Will Look Like (Innovative Ideas)</h3>
                        <p className='news_card_para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_wrapper'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                    <article className='news_card'>
                        <img src={envelope} alt="envelope with thanks" />
                        <h3>15 Gift Ideas for Mom and Dad. Wherever They Are This Year</h3>
                        <p className='news_card_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_wrapper'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default NewsToRead;