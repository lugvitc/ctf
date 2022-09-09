import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useTeam from '../../hooks/useTeam';
import Card from '../../components/Card/Card';

import styles from './play.module.css';

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
            <section id='challenges'>
                {challenges ? (
                    <>
                        <h2>Challenges</h2>
                        <div className={styles.challenges}>
                            {challenges.map(c => (
                                <Card
                                    key={c.id}
                                    challenge={c}
                                    isSolved={
                                        team
                                            ? c.solvedBy.includes(team.name)
                                            : false
                                    }
                                    qWasCorrect={qWasCorrect}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <>loading challenges...</>
                )}
            </section>
        </>
    );
}

