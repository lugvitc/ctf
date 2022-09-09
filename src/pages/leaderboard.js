import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LeaderboardCards from '../components/leaderboardCard/leaderboardCards';

export default function Leaderboard() {
    const [teams, setTeams] = useState(null);
    const { apiPostGetJsonAsTeam } = useFetch();

    useEffect(() => {
        const fetchTeams = async () => {
            const data = await apiPostGetJsonAsTeam('/rt22/teams');
            setTeams(data.teams);
            console.log(teams);
        };
        fetchTeams();
    }, []);

    return (
        <>
            {teams ? (
                teams.length > 0 ? (
                    <LeaderboardCards teams={teams} />
                ) : (
                    <>no teams have registered yet</>
                )
            ) : (
                <>loading...</>
            )}
        </>
    );
}

