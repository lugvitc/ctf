import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/register'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/play'>Play</NavLink>
                </li>
                <li>
                    <NavLink to='/play/leaderboard'>Leaderboard</NavLink>
                </li>
            </ul>
        </nav>
    );
}
