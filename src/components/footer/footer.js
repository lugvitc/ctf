import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.all}>
            Made with ❤️ by{' '}
            <a
                className={styles.link}
                target='_blank'
                rel='noreferrer'
                href='https://lugvitc.github.io/'
            >
                LUG
            </a>
        </footer>
    );
}

