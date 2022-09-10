import { useState, useEffect } from 'react';
import styles from './challengeModal.module.css';
import useFetch from '../../hooks/useFetch';
import ReactMarkdown from 'react-markdown';

import LoadingAnimation from '../loadingAnimation/loadingAnimation';

function ChallengeModal({
    challenge,
    modalRef,
    questionModalOpen,
    setQuestionModalOpen,
    isSolved,
    qWasCorrect
}) {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    function inputChangeHandler(event) {
        setInputValue(event.target.value);
    }

    function closeQuestionModal() {
        if (modalRef.current) {
            setQuestionModalOpen(false);
            modalRef.current.close();
            setInputValue('');
        }
    }

    const { apiPostAsTeam } = useFetch();

    const submitFlag = async () => {
        const res = await apiPostAsTeam('/rt22/submit-flag', {
            flag: inputValue,
            challenge_id: challenge.id
        });
        try {
            setLoading(true);
            const data = await res.json();
            if (data.valid) {
                console.log('good!');
                setQuestionModalOpen(false);
                qWasCorrect();
            } else {
                alert('invalid flag');
                setLoading(false);
            }
        } catch {
            alert('error');
            setLoading(false);
        }
    };

    useEffect(() => {
        const closeIfClickedOutside = e => {
            if (questionModalOpen && e.target === modalRef.current) {
                closeQuestionModal();
                setQuestionModalOpen(false);
            }
        };
        window.addEventListener('click', closeIfClickedOutside);
        return () => {
            window.removeEventListener('click', closeIfClickedOutside);
        };
    }, [modalRef, questionModalOpen, closeQuestionModal]);

    return (
        <dialog ref={modalRef} open={false} className={styles.modal}>
            <>
                {isSolved && 'done'}
                <div className={styles.close} onClick={closeQuestionModal}>
                    X
                </div>
                <div className={styles.header}>
                    <div className={styles.name}>
                        Challenge {challenge.name}
                    </div>
                    <div className={styles.points}>
                        {challenge.points} points
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.description}>
                        <ReactMarkdown
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
                        </ReactMarkdown>
                    </div>
                </div>
                {loading ? (
                    <LoadingAnimation />
                ) : (
                    <>
                        <input
                            value={inputValue}
                            onChange={inputChangeHandler}
                            className={styles.valid}
                        />
                        <button onClick={submitFlag}>Submit</button>
                    </>
                )}
            </>
        </dialog>
    );
}

export default ChallengeModal;

