import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './animateDl.module.css';

export default function AnimateDL({ dt, dd }) {
    const [dtVisible, setDtVisible] = useState(false);
    const [ddVisible, setDdVisible] = useState(false);
    const dtRef = useRef(null);
    const ddRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };
        const comeFromLeft = new IntersectionObserver(entries => {
            const [entry] = entries;
            setDtVisible(entry.isIntersecting);
        }, options);
        const comeFromRight = new IntersectionObserver(entries => {
            const [entry] = entries;
            setDdVisible(entry.isIntersecting);
        }, options);

        if (dtRef.current) comeFromLeft.observe(dtRef.current);
        if (ddRef.current) comeFromRight.observe(ddRef.current);

        return () => {
            if (dtRef.current) comeFromLeft.unobserve(dtRef.current);
            if (ddRef.current) comeFromRight.unobserve(ddRef.current);
        };
    }, [dtRef, ddRef]);

    return (
        <>
            <dt ref={dtRef} className={dtVisible ? styles.show : styles.hidden}>
                {dt}
            </dt>
            <dd ref={ddRef} className={ddVisible ? styles.show : styles.hidden}>
                {dd}
            </dd>
        </>
    );
}
