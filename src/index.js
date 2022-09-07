import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import Landing from './pages/landing';
import Register from './pages/register';
import Login from './pages/login';
import Play from './pages/play/play';
import Leaderboard from './pages/play/leaderboard';

import LoggedInRoute from './components/loggedInRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Landing />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route
                        path='/play'
                        element={
                            <LoggedInRoute>
                                <Outlet />
                            </LoggedInRoute>
                        }
                    >
                        <Route index element={<Play />} />
                        <Route
                            path='/play/leaderboard'
                            element={<Leaderboard />}
                        />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

