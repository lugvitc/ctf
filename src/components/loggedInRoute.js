import React from 'react';
import { useEffect } from 'react';
import useTeam from '../hooks/useTeam';
import Login from '../pages/login';

export default function LoggedInRoute({ children }) {
    const token = window.localStorage.getItem('access-token');
    const isPossibleValidToken = token && token.length > 0;
    const { team, fetchTeam, logoutTeam } = useTeam();

    useEffect(() => {
        const checkTeam = async () => {
            if (!isPossibleValidToken) logoutTeam();
            else if (!team) await fetchTeam();
        };
        checkTeam();
    }, [team]);

    if (!isPossibleValidToken) return <Login />;
    else if (!team) {
        return <>Logging you in...</>;
    } else return children;
}
