import styles from './landing.module.css';
import { faqs, days } from './content';

import lugLogo from './lug.png';
import trcLogo from './trc.png';
import vitLogo from './vit.png';
import technovitLogo from './technovit.png';
import qubitLogo from './qubit.png';
import qr from './qr.jpeg';
import React from 'react';

export default function Landing() {
    return (
        <div className={styles.all}>
            <section className={styles.section}>
                <div className={styles.logoRow}>
                    <img className={styles.logo} src={technovitLogo} />
                    <img className={styles.logo} src={qubitLogo} />
                    <img className={styles.logo} src={vitLogo} />
                </div>
                <div className={styles.logoRow}>
                    <img
                        className={styles.logo}
                        src={lugLogo}
                        style={{ height: '8rem' }}
                    />
                    <img
                        className={styles.logo}
                        src={trcLogo}
                        style={{ height: '8rem' }}
                    />
                </div>
                <h1 className={styles.title}>Cyber-0-Day</h1>
                <div className={styles.subtitle}>A 24-hour tech marathon</div>
                <div className={styles.infoCards}>
                    <div>
                        <div>AB-1: 205A, 205B, 207</div>
                        <div>10 A.M. to 10 10 A.M.</div>
                        <div>
                            24<sup>th</sup> to 25<sup>th</sup> September
                        </div>
                    </div>
                    <div>
                        Registration Fees: <br /> ₹300/-
                    </div>
                    <div>
                        <img className={styles.logo} src={qr} />
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h2>Schedule</h2>
                <dl className={styles.dl}>
                    {days.map((day, index) => (
                        <React.Fragment key={index}>
                            <dt>{day.day}</dt>
                            <dd>
                                <ul>
                                    {day.schedule.map(s => (
                                        <li key={s.time}>
                                            {s.time}: {s.description}
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </React.Fragment>
                    ))}
                </dl>
            </section>
            <section className={styles.section} id='faq'>
                <h2>FAQs</h2>
                <dl className={styles.dl}>
                    {faqs.map(faq => (
                        <React.Fragment key={faq.q}>
                            <dt>{faq.q}</dt>
                            <dd>{faq.a}</dd>
                        </React.Fragment>
                    ))}
                </dl>
            </section>
            <section className={styles.section}>
                <h2>Queries</h2>
            </section>
        </div>
    );
}

