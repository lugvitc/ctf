import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useTeam from '../../hooks/useTeam';
import styles from './navbar.module.css';

const links = [
    { to: '/', text: 'Home' },
    { to: '/play', text: 'Play' },
    { to: '/leaderboard', text: 'Leaderboard' }
];

export default function Navbar() {
    const { team, logoutTeam } = useTeam();
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const promptThenLogout = () => {
        if (window.confirm(`Logging out as team ${team.name}`)) logoutTeam();
    };

    return (
        <nav className={styles.all}>
// <<<<<<< font-styling
//             <div className={styles.name}>Cyber-0-Day</div>
// =======
            <div className={styles.logos}> <p>TechnoVIT : LUGVITC's</p></div>
            <div className={styles.name}>Cyber-0-Day 2.0 : Uncover.Adapt.Triumph</div>
// >>>>>>> master
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : null}`
                        }
                        key={link.to}
                        to={link.to}
                    >
                        {link.text}
                    </NavLink>
                ))}
            </div>
            {team ? (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : null}`
                        }
                        to='/team'
                    >
                        Team {team.name}: {team.currentPoints || 0} points
                    </NavLink>
                    <div className={styles.link} onClick={promptThenLogout}>
                        Logout
                    </div>
                </>
            ) : (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : null}`
                        }
                        to='/login'
                    >
                        Login
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : null}`
                        }
                        to='/signup'
                    >
                        Signup
                    </NavLink>
                </>
            )}
            <div
                className={styles.menu}
                onClick={() => setMenuIsVisible(!menuIsVisible)}
            >
                {menuIsVisible ? <>X</> : <>M</>}
            </div>
            {menuIsVisible && (
                <div
                    className={styles.fullScreenNav}
                    onClick={() => setMenuIsVisible(false)}
                >
                    {links.map(link => (
                        <NavLink
                            className={({ isActive }) =>
                                `${styles.link} ${
                                    isActive ? styles.active : null
                                }`
                            }
                            key={link.to}
                            to={link.to}
                        >
                            {link.text}
                        </NavLink>
                    ))}
                    {team ? (
                        <>
                            <NavLink
                                className={({ isActive }) =>
                                    `${styles.link} ${
                                        isActive ? styles.active : null
                                    }`
                                }
                                to='/team'
                            >
                                Team {team.name}: {team.currentPoints || 0}{' '}
                                points
                            </NavLink>
                            <div
                                className={styles.link}
                                onClick={promptThenLogout}
                            >
                                Logout
                            </div>
                        </>
                    ) : (
                        <>
                            <NavLink
                                className={({ isActive }) =>
                                    `${styles.link} ${
                                        isActive ? styles.active : null
                                    }`
                                }
                                to='/login'
                            >
                                Login
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `${styles.link} ${
                                        isActive ? styles.active : null
                                    }`
                                }
                                to='/signup'
                            >
                                Signup
                            </NavLink>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}

