import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LeaderboardCards from '../components/leaderboardCard/leaderboardCards';

import LoadingAnimation from '../components/loadingAnimation/loadingAnimation';

export default function Leaderboard() {
    const [teams, setTeams] = useState(null);
    const { apiPostGetJsonAsTeam } = useFetch();

    useEffect(() => {
        const fetchTeams = async () => {
            const data = await apiPostGetJsonAsTeam('/ctf/teams');
            setTeams(data.teams);
            console.log(teams);
        };
        fetchTeams();
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

