import { Outlet } from 'react-router-dom';

import './styles/App.css';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import GoToTopButton from './components/gotToTopButton/goToTopButton';

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <GoToTopButton />
            <Footer />
        </>
    );
}

