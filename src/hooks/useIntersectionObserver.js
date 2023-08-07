import { useState, useEffect, useRef } from "react";

function useIntersectionObserver(threshold = 1) {
    const [animate, setAnimate] = useState(false)
    const currentRef = useRef(null)

    useEffect(() => {
        const currentRefValue = currentRef.current

        const currentObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !animate) {
                setAnimate(true);
                currentObserver.unobserve(entry.target)
            }
        }, { threshold }
        );
        if (currentRefValue) {
            currentObserver.observe(currentRefValue)
        }
        return () => {
            if (currentRefValue) {
                currentObserver.unobserve(currentRefValue)
            }
        }

    }, [animate, threshold])
    return { currentRef, animate }
}

export default useIntersectionObserver;