import styles from './landing.module.css';
import { faqs, days, info } from './content';

import lugLogo from './lug.png';
import vitLogo from './vit.png';
import qubitLogo from './qubit.jpeg';
import innovationCouncilLogo from './innovationCouncil.jpeg'
import qr from './qr.png';
import React from 'react';
import FaqComponent from '../../components/faq/faq';

import AnimateDL from './animateDL/animateDL';

export default function Landing() {
    return (
        <div className={styles.all}>
            <section className={styles.section}>
                <div className={styles.logoRow}>
                    <div className={styles.center}>
                        <h3 className={styles.sponsors}>SPONSORS</h3>
                        <div className={styles.horizontal}>
                            <img className={styles.logo} src={vitLogo} />
                            <img className={styles.logo} style={{width: "150px", height: "100px", marginTop: "50px"}} src={innovationCouncilLogo} /> 
                            <img className={styles.logo} src={lugLogo} />
                            <img className={styles.logo} style={{ width: "150px", height: "100px", marginTop: '50px' }} src={qubitLogo} />
                        </div>    
                    </div>
                    

                </div>


                <h1 className={styles.title}>{info.Event}</h1>
                <div className={styles.tagline}>{info.Subtitle}</div>
                <div className={styles.infoCards}>
                    <div>
                        <div>{info.Location}</div>
                        <div>
                            {info.Dates}
                        </div>
                    </div>
                    <div>
                        ENTRY FEES <br /> {info.Fees}
                    </div>
                    <div>
                        <strong>REGISTER</strong> <img className={styles.qr} src={qr} />
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={styles.subtitle}>SCHEDULE</h2>
                <dl className={styles.dl}>
                    {days.map((day, index) => (
                        <AnimateDL
                            dt={day.day}
                            dd={day.schedule.map(s => (
                                <li className={styles.schedule}>
                                    {s.description}
                                </li>
                            ))}
                            key={index}
                        />
                        // <React.Fragment key={index}>
                        //     <dt>{day.day}</dt>
                        //     <dd>
                        //         <ul>
                        //             {day.schedule.map(s => (
                        //                 <li key={s.time}>
                        //                     {s.time}: {s.description}
                        //                 </li>
                        //             ))}
                        //         </ul>
                        //     </dd>
                        // </React.Fragment>
                    ))}
                </dl>
            </section>
            <section className={styles.section} id='faq'>
                <h2 className={styles.subtitle}>FAQs</h2>

                <dl className={styles.dl}>
                    {faqs.map(faq => (
                        <FaqComponent que={faq.q} ans={faq.a}></FaqComponent>
                        // <React.Fragment key={faq.q}>
                        //     <dt>{faq.q}</dt>
                        //     <dd>{faq.a}</dd>
                        // </React.Fragment>
                    ))}
                </dl>
            </section>
            <section className={styles.section}>
                <h2>Queries</h2>
                <dl className={styles.dl}>

                    <AnimateDL
                        dt={'Student Coordinators'}
                        dd={
                            <ul>
                                <li>Ansh Sharma: +919540018950</li>
                                <li>Shaina: +918925785445</li>

                            </ul>
                        }
                    />
                    <AnimateDL
                        dt={'Faculty Coordinators'}
                        dd={
                            <ul>
                                <li>Dr. Gayathri R. : +919597300373</li>
                                <li>Dr. L. Mary Shamala: +919442516171</li>
                            </ul>
                        }
                    />
                    <AnimateDL
                        dt={'Contact Us'}
                        dd={
                            <>
                                Linux Club:
                                <ul>
                                    <li>Mail : <a href='mailto:cclinuxclub@vit.ac.in'>cclinuxclub@vit.ac.in</a></li>
                                    <li> IG : 
                                        <a
                                            href='https://www.instagram.com/lugvitc/'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                             Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://lugvitc.github.io/'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            Website
                                        </a>
                                    </li>
                                </ul>
                            </>
                        }
                    />
                    {/* <dt>Student Coordinators</dt>
                    <dd>
                        <ul>
                            <li>Swaifa Haque: 93724 62680</li>
                            <li>Abhiram Arumilli: 83338 42117</li>
                        </ul>
                    </dd>
                    <dt>Faculty Coordinators</dt>
                    <dd>
                        <ul>
                            <li>Dr. R Vedhapriyavadhana</li>
                            <li>Dr. Gayathri R.</li>
                        </ul>
                    </dd>
                    <dt>Contact Us</dt>
                    <dd>
                        Linux Club:
                        <ul>
                            <li>Email: cclinuxclub@vit.ac.in</li>
                            <li>
                                <a
                                    href='https://www.instagram.com/lugvitc/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://lugvitc.github.io/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Website
                                </a>
                            </li>
                        </ul>
                    </dd>
                    <dd>
                        Tech Researchers Club:
                        <ul>
                            <li>Email: techresearchers.vitc@gmail.com</li>
                            <li>
                                <a
                                    href='https://www.instagram.com/techresearchers.vitc/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </dd> */}
                </dl>
            </section>
        </div>
    );
}

