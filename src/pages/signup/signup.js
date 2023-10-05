import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useFetch from '../../hooks/useFetch';

import styles from './signup.module.css';

export default function Signup() {
    const [teamValues, setTeamValues] = useState({
        name: '',
        member1RegNo: '',
        member2RegNo: '',
        member3RegNo: '',
        password: ''
    });

    const [teamValuesAreValid, setTeamValuesAreValid] = useState({
        member1RegNo: true,
        member2RegNo: true,
        member3RegNo: true
    });

    const navigate = useNavigate();
    const { apiPost } = useFetch();

    // useEffect(() => {
    //     const verifyRegNo = async (regno, endpoint) => {
    //         if (teamValues[regno] && teamValues.member1RegNo.length === 9) {
    //             const res = await apiPost(endpoint, {
    //                 regno: teamValues.member1RegNo
    //             });
    //             const data = await res.json();
    //             if (data.valid) {
    //                 setTeamValuesAreValid({
    //                     ...teamValuesAreValid,
    //                     [regno]: true
    //                 });
    //             }
    //         }
    //     };

    //     verifyRegNo('member1RegNo', '/ctf/verify-duplicate-regno');
    //     verifyRegNo('member2RegNo', '/ctf/verify-duplicate-regno');
    //     verifyRegNo('member3RegNo', '/ctf/verify-duplicate-regno');
    // }, [
    //     teamValues.member1RegNo,
    //     teamValues.member2RegNo,
    //     teamValues.member3RegNo
    // ]);

    const submit = async e => {
        e.preventDefault();
        if (
            !teamValues.name ||
            !teamValues.member1RegNo ||
            !teamValues.password
        ) {
            alert('Please fill out all the fields');
        } else {
            if (!teamValues.member2RegNo) delete teamValues['member2RegNo'];
            if (!teamValues.member3RegNo) delete teamValues['member3RegNo'];

            const r1 = await apiPost('/ctf/verify-team-name', {
                name: teamValues.name
            });
            const d1 = await r1.json();

            if (
                d1.valid &&
                teamValuesAreValid.member1RegNo &&
                (teamValues.member2RegNo
                    ? teamValuesAreValid.member2RegNo
                    : true) &&
                (teamValues.member3RegNo
                    ? teamValuesAreValid.member3RegNo
                    : true)
            ) {
                const res = await apiPost('/ctf/create-team', teamValues);
                if (res.ok) {
                    toast.success("Team Created Successfully")
                    navigate('/login');
                }
            } else {
                toast.error("Team name already taken !")
                // alert('team name already taken');
            }
        }
    };

    const handleChange = input => e => {
        setTeamValues({ ...teamValues, [input]: e.target.value });
    };

    return (
        <>
            <form className='lug-form' onSubmit={submit}>
                <div className='form-start'> Create Team Here </div>

                <div className='form-field'>
                    <label> * Group Name: </label>
                    <input
                        type='text'
                        maxLength='128'
                        onChange={handleChange('name')}
                        value={teamValues.name}
                    />
                </div>

                <div className='form-field'>
                    <label> * Group Password: </label>
                    <input
                        type='password'
                        maxLength='64'
                        onChange={handleChange('password')}
                        value={teamValues.password}
                    />
                </div>

                <div className='form-field'>
                    <label> * Registration Number (Member 1): </label>
                    <input
                        type='text'
                        onChange={handleChange('member1RegNo')}
                        value={teamValues.member1RegNo}
                        className={
                            teamValues.member1RegNo &&
                            teamValuesAreValid.member1RegNo
                                ? styles.valid
                                : styles.invalid
                        }
                    />
                </div>

                <div className='form-field'>
                    <label> Registration Number (Member 2): </label>
                    <input
                        type='text'
                        onChange={handleChange('member2RegNo')}
                        value={teamValues.member2RegNo}
                        className={
                            teamValues.member2RegNo
                                ? teamValuesAreValid.member2RegNo
                                    ? styles.valid
                                    : styles.invalid
                                : ''
                        }
                    />
                </div>

                <div className='form-field'>
                    <label> Registration Number (Member 3): </label>
                    <input
                        type='text'
                        onChange={handleChange('member3RegNo')}
                        value={teamValues.member3RegNo}
                        className={
                            teamValues.member3RegNo
                                ? teamValuesAreValid.member3RegNo
                                    ? styles.valid
                                    : styles.invalid
                                : ''
                        }
                    />
                </div>

                <div className='form-end'>
                    <button type='submit' className='form-nav-button'>
                        Create
                    </button>
                </div>
            </form>
        </>
    );
}

