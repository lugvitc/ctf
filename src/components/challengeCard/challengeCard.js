import { useRef, useState } from 'react';
import styles from './challengeCard.module.css';
import ChallengeModal from '../challengeModal/challengeModal';
import ReactMarkdown from 'react-markdown';

export default function ChallengeCard({ challenge, isSolved, qWasCorrect, ques_no }) {
    const [questionModalOpen, setQuestionModalOpen] = useState(false);
    const modalRef = useRef(null);

    function openQuestionModal() {
        if (modalRef.current) {
            setQuestionModalOpen(true);
            modalRef.current.showModal();
        }
    }

    return (
        <>
            {!isSolved && (
                <ChallengeModal
                    challenge={challenge}
                    modalRef={modalRef}
                    questionModalOpen={questionModalOpen}
                    setQuestionModalOpen={setQuestionModalOpen}
                    isSolved={isSolved}
                    qWasCorrect={qWasCorrect}
                    ques_no={ques_no}
                />
            )}
            <div
                className={`${styles.card} ${isSolved ? styles.solved : ''}`}
                onClick={openQuestionModal}
            >
                <div className={styles.header}>
                    <h2>{challenge.name}</h2>
                    <div>Points | {challenge.points}</div>
                </div>
                {!isSolved ? (
                    <div className={styles.description}>
                        {/* <ReactMarkdown
                            components={{
                                a: props => (
                                    <a
                                        {...props}
                                        target='_blank'
                                        rel='noreferrer'
                                    />
                                )
                            }}
                        >
                            {challenge.description}
                        </ReactMarkdown> */}
                        Solved by {challenge.solvedBy.length} teams
                    </div>
                ) : (
                    'solved'
                )}
            </div>
        </>
    );
}

