import styles from './leaderboardCards.module.css';
import useTeam from '../../hooks/useTeam';

export default function LeaderboardCards({ teams }) {
    teams = teams.sort((a, b) =>
        a != b
            ? b.currentPoints - a.currentPoints
            : new Date(b.lastTimeStamp).getTime() -
              new Date(a.lastTimeStamp).getTime()
    );

    const { team } = useTeam();

    return (
        <div className={styles.cards}>
            {teams.map((t, index) => (
                <div
                    className={`${styles.card} ${
                        team ? (t.name == team.name ? styles.userTeam : '') : ''
                    }`}
                    key={t.name}
                >
                    <div className={styles.position}>{index + 1}</div>
                    <div className={styles.teamData}>
                        <div>
                            <div className={styles.name}>{t.name}</div>
                            <div className={styles.memberCount}>
                                {t.members} member{t.members === 1 ? '' : 's'}
                            </div>
                        </div>
                        <div>
                            <div className={styles.points}>
                                {t.currentPoints || 0}
                            </div>
                            <div>points</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

