import useIntersectionObserver from "../hooks/useIntersectionObserver";

function ServiceOne() {
    const { currentRef, animate } = useIntersectionObserver(0.3)
    return (
        <section ref={currentRef} style={{ backgroundColor: '#121212' }}>
            <div className="container">
                <div className={`contacts_title ${animate ? 'animate_news ' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                    <h2>New Service 1</h2>
                    <p>Place For Your Service...</p>
                </div>
            </div>
        </section>
    )
}

export default ServiceOne;