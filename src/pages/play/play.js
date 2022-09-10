import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useTeam from '../../hooks/useTeam';
import Card from '../../components/Card/Card';

import styles from './play.module.css';
import LoadingAnimation from '../../components/loadingAnimation/loadingAnimation';

export default function Play() {
    const [challenges, setChallenges] = useState(null);

    const { apiPostGetJsonAsTeam } = useFetch();
    const { team, logoutTeam, fetchTeam } = useTeam();

    const fetchChallenges = async () => {
        const data = await apiPostGetJsonAsTeam('/rt22/challenges');
        setChallenges(data.challenges);
    };

    useEffect(() => {
        fetchChallenges();
    }, []);

    const qWasCorrect = () => {
        fetchChallenges();
        fetchTeam();
    };

    return (
        <>
            <h1>Play</h1>
            {challenges ? (
                <div className={styles.challenges}>
                    {challenges.map(c => (
                        <Card
                            key={c.id}
                            challenge={c}
                            isSolved={
                                team ? c.solvedBy.includes(team.name) : false
                            }
                            qWasCorrect={qWasCorrect}
                        />
                    ))}
                </div>
            ) : (
                <LoadingAnimation />
            )}
        </>
    );
}

