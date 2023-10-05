// <<<<<<< error-modal
// import { useState, useEffect } from "react";
// import styles from "./challengeModal.module.css";
// import useFetch from "../../hooks/useFetch";
// import ReactMarkdown from "react-markdown";
// import PopAlert from "../popAlert/popAlert";
// =======
import React from "react";
import { useState, useEffect } from "react";
import styles from "./challengeModal.module.css";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import PopAlert from "../popAlert/popAlert";
import toast, { Toaster } from "react-hot-toast";

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
      return <ErrorModal error={error.message} open={true} />;
    }
  };

  const tooglePort = () => {
    if (BtnState == "Start") {
      startLab();
      // setBtnState("Stop");
    } else if (BtnState == "Stop") {
      stopLab();
      // setBtnState("Start");
    } else {
      setBtnState("Loading");
      loadLab();
    }
  };

  const loadLab = () => {
    toast.error("andha hai kya load ho ra hai");
  };

  const startLab = async () => {
    setBtnState("Loading");
    const res = await apiPostAsTeam("/ctf/start", {
      challenge_id: challenge.id,
    });
    try {
      let data;
      try {
        data = await res.json();
      } catch (error) {
        data = {};
        console.log(error+"line 127");
      }
      if (res.status == 200) {
        if (data.msg === undefined) {
          console.log("good!");
          toast.success("Allocated resources");
          setPortNumber("http://ctf.lugvitc.org/"+data.port);
          setStartLabVal(true);
          setBtnState("Stop");
          setLoading(false);
        } else {
          toast.success(
            `Challenge : ${data.name} already started . Close that challenge.`
          );
          setBtnState("Start");
          // setPortNumber("");
          // setStartLabVal(false);
          setLoading(false);
        }
      } else if (res.status == 422) {
        toast.error("422 hai !");
        setBtnState("Start");
      } else if (res.status == 429) {
        toast.error("Too many requests , try after 10 seconds !");
        setBtnState("Start");
      }
    } catch (error){
      console.log(error+"line 154");
      // alert("error");
      setBtnState("Start");
      toast.error("Some error occurred");

      // setLoading(false);
    }
  };

  const stopLab = async () => {
    setBtnState("Loading");
    const res = await apiPostAsTeam("/ctf/stop", {
      challenge_id: challenge.id,
    });
    try {
      const data = await res.json();
      // setLoading(true);
      if (res.status == 200) {
        console.log("good!");
        setPortNumber("");
        setStartLabVal(false);
        setBtnState("Start");
        // setLoading(false);
        toast.success("Resouces Deallocated");
      } else if (res.status == 422) {
        toast.error("Too many requests , try after 10 seconds !");
        setBtnState("Stop");
      } else if (res.status == 400) {
        toast.error(data.msg);
        setBtnState("Stop");
      }
    } catch {
      setBtnState("Stop");
      toast.error("Some error occurred");
      // setLoading(false);
    }
  };

  const [StartLabVal, setStartLabVal] = useState(false);
  const [PortNumber, setPortNumber] = useState(null);
  const [BtnState, setBtnState] = useState("Start");

  useEffect(() => {
    if (challenge.active == challenge.id) {
      setBtnState("Stop");
      setStartLabVal(true);
      setPortNumber(challenge.active_port);
    }
    return () => {};
  }, []);

  useEffect(() => {
    // console.log(challenge.active_port);
    // console.log(typeof(challenge.active_port));
    // console.log(typeof(challenge.active));
    // console.log(typeof(challenge.id));

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
      <Toaster />
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
              {/* ports btn */}
              <button onClick={tooglePort} className="form-nav-button">
                {BtnState}
              </button>
              {StartLabVal && <h3>{PortNumber}</h3>}
              <br />
              {/* <div className={styles.ctfLinks}>
                {challenge.links.map((item) => (
                  <a href={"http://challenges.ports"+item.link} style={myStyle}>
                    {item.name}
                  </a>
                ))}
              </div> */}
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
