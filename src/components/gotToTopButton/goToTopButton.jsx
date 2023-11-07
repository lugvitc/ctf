import React from 'react';
import UpArrowIcon from './upArrowIcon';
import './goToTopButton.css';
import { useEffect, useState } from 'react';

export default function GoToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        show && (
            <div className='to-top' onClick={() => window.scrollTo(0, 0)}>
                <UpArrowIcon />
            </div>
        )
    );
}

