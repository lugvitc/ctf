import { NavLink } from 'react-router-dom';
import useTeam from '../../hooks/useTeam';
import styles from './Navbar.module.css';

const links = [
    { to: '/', text: 'Home' },
    // { to: '/register', text: 'Register' },
    // { to: '/login', text: 'Login' },
    { to: '/play', text: 'Play' },
    { to: '/leaderboard', text: 'Leaderboard' }
];

export default function Navbar() {
    const { team, logoutTeam } = useTeam();

    const promptThenLogout = () => {
        if (window.confirm(`Logging out as team ${team.name}`)) logoutTeam();
    };

    return (
        <nav className={styles.all}>
            <div className={styles.logos}>LUG x TRC</div>
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
                <NavLink
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : null}`
                    }
                    to='/login'
                >
                    Login/Register
                </NavLink>
            )}
        </nav>
    );
}
