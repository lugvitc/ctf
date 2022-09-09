import useTeam from '../hooks/useTeam';

export default function Team() {
    const { team } = useTeam();
    return (
        <>
            {team ? (
                <>
                    <h2>Team: {team.name}</h2>
                    <ul>
                        {team.members &&
                            team.members.map(
                                m => m.regNo && <li key={m.regNo}>{m.regNo}</li>
                            )}
                    </ul>
                    <div>{team.currentPoints || 0} points</div>
                </>
            ) : (
                <>loading team data...</>
            )}
        </>
    );
}
