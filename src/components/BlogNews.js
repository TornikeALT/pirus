import '../styles/BlogNews.css'
import vrWoman from '../images/vrwoman.jpg'
import design from '../images/design.jpg'
import thx from '../images/thanks.jpg'
import phoneBlue from '../images/phone-2.jpg'
import phoneRed from '../images/phone.jpg'
import mask from '../images/mask.jpg'
import useIntersectionObserver from '../hooks/useIntersectionObserver'


function BlogNews() {
    const { currentRef, animate } = useIntersectionObserver(0.1)
    return (
        <section className='blog_news_section' ref={currentRef}>
            <div className="container" >
                <div className={`works_title ${animate ? 'animate_news ' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                    <h2>Check our latest news.</h2>
                    <p>CHECK OUT SOME OF OUR NEWS</p>
                </div>
                <div className='blog_news_wrapper'>
                    <article className='blog_news_item'>
                        <img src={vrWoman} alt="woman with vr" />
                        <h3 className='blog_news_item_title'>Could this VR sketching tool be coming of age for designers in the future?</h3>
                        <p className='blog_news_item_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_btn'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                    <article className='blog_news_item'>
                        <img src={design} alt="buildings design" />
                        <h3 className='blog_news_item_title'>8 Cities That Show You What The Future Will Look Like (Innovative Ideas)</h3>
                        <p className='blog_news_item_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_btn'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                    <article className='blog_news_item'>
                        <img src={thx} alt="thanks envelope" />
                        <h3 className='blog_news_item_title'>15 Gift Ideas for Mom and Dad. Wherever They Are This Year</h3>
                        <p className='blog_news_item_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_btn'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                    <article className='blog_news_item'>
                        <img src={phoneBlue} alt="phone with blue background" />
                        <h3 className='blog_news_item_title'>Yes, You Should Be Using Apple Pay or Google Pay Right Now</h3>
                        <p className='blog_news_item_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_btn'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                    <article className='blog_news_item'>
                        <img src={phoneRed} alt="phone with red background" />
                        <h3 className='blog_news_item_title'>How to Trick Out Your iPhone Home Screen in iOS 14 (Newest)</h3>
                        <p className='blog_news_item_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_btn'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                    <article className='blog_news_item'>
                        <img src={mask} alt="mask with yellow background" />
                        <h3 className='blog_news_item_title'>22 Face Masks We Actually Like to Wear In The Future (Creative Business Ideas)</h3>
                        <p className='blog_news_item_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                        <div className='read_more_btn'>
                            <a href="/#">Read More</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default BlogNews;