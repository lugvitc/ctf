import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useTeam from '../../hooks/useTeam';
import ChallengeCard from '../../components/challengeCard/challengeCard';

import styles from './play.module.css';
// import NotPlay from './notplay';
import LoadingAnimation from '../../components/loadingAnimation/loadingAnimation';

export default function Play() {
    const [challenges, setChallenges] = useState(null);
    const [showSolvedChallenges, setShowSolvedChallenges] = useState(false);

    const { apiPostGetJsonAsTeam } = useFetch();
    const { team, logoutTeam, fetchTeam } = useTeam();
    // var team = {
    //     "name": "Test"
    // };
    // const apiPostGetJsonAsTeam = async (url) => {
    //     return {
    //         "challenges": [{
    //             "id": "gm",
    //             "solvedBy": [],
    //             "name": "test",
    //             "points": 100
    //         }, {
    //             "id": "gm",
    //             "solvedBy": [],
    //             "name": "test",
    //             "points": 100
    //         }, {
    //             "id": "gm",
    //             "solvedBy": [],
    //             "name": "test",
    //             "points": 100
    //         }, {
    //             "id": "gm",
    //             "solvedBy": [],
    //             "name": "test",
    //             "points": 100
    //         }, {
    //             "id": "gm",
    //             "solvedBy": [],
    //             "name": "test",
    //             "points": 100
    //         }]
    //     }
    // }
    const fetchChallenges = async () => {
        const data = await apiPostGetJsonAsTeam('/ctf/challenges');
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





    <div className={styles.playTime}>

        <h1 className={`${styles.playTimePlay}`}>Play</h1>
        <h2>Instructions</h2>
        <p>
            The file/link in every challenge hides a flag, which is a string
            of the format <blockquote className={`${styles.pointer}`}><code className={`${styles.flag}`}>{'c0d{...}'}</code></blockquote> 
        </p>
        <h2>Challenges</h2>
        <div className={styles.checkboxContainer}>
            <input
                type='checkbox'
                onChange={e => setShowSolvedChallenges(e.target.checked)}
            />
            <label>Show solved challenges</label>
        </div>
        <div className={styles.centerContainer}>
            <div className={styles.challengesGrid}>
                {challenges ? (
                    challenges
                        .filter(c =>
                            showSolvedChallenges
                                ? true
                                : !c.solvedBy.includes(team.name)
                        )
                        .map(c => (
                            <ChallengeCard
                                key={c.id}
                                challenge={c}
                                isSolved={
                                    team
                                        ? c.solvedBy.includes(team.name)
                                        : false
                                }
                                qWasCorrect={qWasCorrect}
                                ques_no = {c.id}
                                
                            />
                        ))
                ) : (
                    <LoadingAnimation />
                )}
            </div>
        </div>
    </div>

        
    </>
);

}
