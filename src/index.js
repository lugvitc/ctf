import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import './styles/index.css';
import './styles/colors.css';
import './styles/forms.css';

import App from './App';

import Landing from './pages/landing/landing';
import Signup from './pages/signup/signup';
import Login from './pages/login';
import Play from './pages/play/play';
import Leaderboard from './pages/leaderboard';
import Team from './pages/team';

import LoggedInRoute from './components/loggedInRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Signup />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route
                        path='/play'
                        element={
                            <LoggedInRoute>
                                <Play />
                            </LoggedInRoute>
                        }
                    />
                    <Route
                        path='/leaderboard'
                        element={
                            <LoggedInRoute>
                                <Leaderboard />
                            </LoggedInRoute>
                        }
                    />
                    <Route
                        path='/team'
                        element={
                            <LoggedInRoute>
                                <Team />
                            </LoggedInRoute>
                        }
                    />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

