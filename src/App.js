import { Outlet } from 'react-router-dom';

import './styles/App.css';

import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
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

