import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LeaderboardCards from '../components/leaderboardCard/leaderboardCards';

import LoadingAnimation from '../components/loadingAnimation/loadingAnimation';

export default function Leaderboard() {
    const [teams, setTeams] = useState(null);
    const { apiPostGetJsonAsTeam } = useFetch();

    const fetchLeaderboardData = () => {
        const fetchTeams = async () => {
            const data = await apiPostGetJsonAsTeam('/ctf/teams');
            setTeams(data.teams);
            console.log(data.teams);
        };
        fetchTeams();
    }

    useEffect(() => {
        fetchLeaderboardData();

        // Specify the refresh interval in milliseconds (e.g., 10 seconds = 10000 ms)
        const refreshInterval = setInterval(fetchLeaderboardData, 10000);
        return () => clearInterval(refreshInterval);
    }, []);


    return (
        <>
            <h1>Leaderboard</h1>
            {teams ? (
                teams.length > 0 ? (
                    <LeaderboardCards teams={teams} />
                ) : (
                    <>no teams have registered yet</>
                )
            ) : (
                <LoadingAnimation />
            )}
        </>
    );
}

