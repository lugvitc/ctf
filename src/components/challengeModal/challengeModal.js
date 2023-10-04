// <<<<<<< error-modal
// import { useState, useEffect } from "react";
// import styles from "./challengeModal.module.css";
// import useFetch from "../../hooks/useFetch";
// import ReactMarkdown from "react-markdown";
// import PopAlert from "../popAlert/popAlert";
// =======
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './challengeModal.module.css';
import useFetch from '../../hooks/useFetch';
import ReactMarkdown from 'react-markdown';
import PopAlert from '../popAlert/popAlert';

// >>>>>>> master

import LoadingAnimation from "../loadingAnimation/loadingAnimation";
import ErrorModal from "../errorModals/errorModal";
const myStyle = {
  textDecoration: "none",
  fontFamily: "monospace",
  color: "#ebcece",
  fontSize: "14px",
  marginBottom: "5px",
  paddingRight: "8px",
  backgroundColor: "",
};
function ChallengeModal({
  challenge,
  modalRef,
  questionModalOpen,
  setQuestionModalOpen,
  isSolved,
  qWasCorrect,
  ques_no,
}) {
  console.log(challenge.is_hint);

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  // const [timer, setTimer] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [hint_1, setHint1] = useState("");
  const [hint_2, setHint2] = useState("");
  const [hint_3, setHint3] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHints, setShowHints] = useState({
    hint1: false,
    hint2: false,
    hint3: false,
  });

  const [PortNumber, setPortNumber] = useState(null);
  const [StartLabVal, setStartLabVal] = useState(false);


  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  function closeQuestionModal() {
    if (modalRef.current) {
      setQuestionModalOpen(false);
      modalRef.current.close();
      setInputValue("");
    }
  }

  const { apiPostAsTeam, api } = useFetch();

  const submitFlag = async () => {
    const res = await apiPostAsTeam("/ctf/submit-flag", {
      flag: inputValue,
      challenge_id: challenge.id,
    });
    try {
      setLoading(true);
      const data = await res.json();
      if (data.valid) {
        console.log("good!");
        setQuestionModalOpen(false);
        qWasCorrect();
      } else {
        // alert('invalid flag');
        handleShowAlert();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return (
        
        <ErrorModal error={error.message} open={true} />
        )
    }
  };
  const startLab = async () => {
        const res = await apiPostAsTeam('api/ctf/start', {
            challenge_id: challenge.id
        });
        try {
            setLoading(true);
            const data = await res.json();
            if (data.msg === undefined) {
                console.log('good!');
                setPortNumber(data.port);
                setStartLabVal(true);
            } else {
                
                handleShowAlert();
                setLoading(false);
            }
        } catch {
            alert('error');
            setLoading(false);
        }
    };

    const stopLab = async () => {
        const res = await apiPostAsTeam('api/ctf/stop', {
            challenge_id: challenge.id
        });
        try {
            setLoading(true);
            const data = await res.json();
            if (data.msg === undefined) {
                console.log('good!');
                setPortNumber('');
                setStartLabVal(false);
            } else {
                handleShowAlert();
                setLoading(false);
            }
        } catch {
            alert('error');
            setLoading(false);
        }
    };
  

  useEffect(() => {
    const closeIfClickedOutside = (e) => {
      if (questionModalOpen && e.target === modalRef.current) {
        closeQuestionModal();
        setQuestionModalOpen(false);
      }
    };
    window.addEventListener("click", closeIfClickedOutside);
    return () => {
      window.removeEventListener("click", closeIfClickedOutside);
    };
  }, [modalRef, questionModalOpen, closeQuestionModal, setQuestionModalOpen]);

  return (
    <>
      <dialog ref={modalRef} open={false} className={styles.modal}>
        <>
          {isSolved && "done"}
          <div className={styles.close} onClick={closeQuestionModal}>
            X
          </div>
          <div className={styles.header}>
            <div className={styles.name}>Challenge {challenge.name}</div>
            <div className={styles.points}>{challenge.points} points</div>
          </div>
          <div className={styles.grid}>
            <div className={styles.description}>
              <br />
              <span className={styles.author}>
                Author : {challenge.created_by}
              </span>
              <br />
              <br />
              Description:
              <ReactMarkdown
                components={{
                  a: (props) => (
                    <a {...props} target="_blank" rel="noreferrer" />
                  ),
                }}
              >
                {challenge.description}
                {/* links added */}
                {/* dhananjay added above with meetesh */}
              </ReactMarkdown>
              <div className={styles.ctfLinks}>
                {challenge.links.map((item) => (
                  <a href={item.link} style={myStyle}>
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div className={styles.hintSpacing}></div> */}
              Solved by {challenge.solvedBy.length} teams
            </div>
          </div>
          {loading ? (
            <LoadingAnimation />
          ) : (
            <div className="form-end">
              <input
                value={inputValue}
                onChange={inputChangeHandler}
                className={styles.valid}
              />
              <button className="form-nav-button" onClick={submitFlag}>
                Submit
              </button>
            </div>
          )}
          {showAlert && (
            <PopAlert
              message="Invalid flag"
              duration={3000}
              onClose={handleCloseAlert}
            />
          )}
          <div className={styles.hints}>
            {challenge.is_hint[0] && (
              <button
                className="form-nav-button"
                onClick={() => {
                  console.log(ques_no);
                  apiPostAsTeam("/ctf/getHint", {
                    hint: 0,
                    challenge_id: ques_no,
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      let hint = data["hint"];
                      setShowHints({ ...showHints, hint1: true });
                      setHint1(hint);
                    });
                }}
              >
                Hint 1
              </button>
            )}
            {challenge.is_hint[0] && showHints.hint1 && (
              <div className={styles.hintText}>{hint_1}</div>
            )}
            <div className={styles.hintSpacing}></div> {/* Add spacing */}
            {challenge.is_hint[1] && (
              <button
                className="form-nav-button"
                onClick={() => {
                  console.log(ques_no);
                  apiPostAsTeam("/ctf/getHint", {
                    hint: 1,
                    challenge_id: ques_no,
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      let hint = data["hint"];
                      setShowHints({ ...showHints, hint2: true });
                      setHint2(hint);
                    });
                }}
              >
                Hint 2
              </button>
            )}
            {challenge.is_hint[1] && showHints.hint2 && (
              <div className={styles.hintText}>{hint_2}</div>
            )}
            <div className={styles.hintSpacing}></div>
            {challenge.is_hint[2] && (
              <button
                className="form-nav-button"
                onClick={() => {
                  console.log(ques_no);
                  apiPostAsTeam("/ctf/getHint", {
                    hint: 2,
                    challenge_id: ques_no,
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      let hint = data["hint"];
                      setShowHints({ ...showHints, hint3: true });
                      setHint3(hint);
                    });
                }}
              >
                Hint 3
              </button>
            )}
            {challenge.is_hint[2] && showHints.hint3 && (
              <div className={styles.hintText}>{hint_3}</div>
            )}
          </div>
          {/*  */}

          {/* <div className={styles.hints}>
                    
                    <button
                       className='form-nav-button'
                       onClick={() => {
                           console.log(ques_no);
                           apiPostAsTeam("/ctf/getHint", {
                                   hint: 0,
                                   challenge_id: ques_no
                           })
                               .then(res => res.json())
                               .then((data) => {
                                   let hint = data["hint"];
                                   setShowHints({ ...showHints, hint1: true });
                                   setHint1(hint);
                               });
                       }}
                   >
                       Hint 1
                   </button> 
                   
                   {showHints.hint1 && (
                       <div className={styles.hintText}>{hint_1}</div>
                   )}
                   <div className={styles.hintSpacing}></div> 
                   <button
                       className='form-nav-button'
                       onClick={() => {
                           console.log(ques_no);
                           apiPostAsTeam("/ctf/getHint", {
                                   hint: 1,
                                   challenge_id: ques_no
                           })
                               .then(res => res.json())
                               .then((data) => {
                                   let hint = data["hint"];
                                   setShowHints({ ...showHints, hint2: true });
                                   setHint2(hint);
                               });
                       }}
                   >
                       Hint 2
                   </button>
                   
                   {showHints.hint2 && (
                       <div className={styles.hintText}>{hint_2}</div>
                   )}
                   <div className={styles.hintSpacing}></div>
               
                   <button
                       className='form-nav-button'
                       onClick={() => {
                           console.log(ques_no);
                           apiPostAsTeam("/ctf/getHint", {
                                   hint: 2,
                                   challenge_id: ques_no
                           })
                               .then(res => res.json())
                               .then((data) => {
                                   let hint = data["hint"];
                                   setShowHints({ ...showHints, hint3: true });
                                   setHint3(hint);
                               });
                       }}
                   >
                       Hint 3
                   </button>
                   {showHints.hint3 && (
                       <div className={styles.hintText}>
                           {hint_3}
                       </div>
                   )}
               </div> */}
          {/*  */}
        </>
      </dialog>
    </>
  );
}

export default ChallengeModal;
