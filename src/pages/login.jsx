import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LoadingAnimation from '../components/loadingAnimation/loadingAnimation';
import useFetch from '../hooks/useFetch';
import useTeam from '../hooks/useTeam';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const [loginValues, setLoginValues] = useState({
        user: '',
        name: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = input => e => {
        setLoginValues({ ...loginValues, [input]: e.target.value });
    };

    const navigate = useNavigate();
    const location = useLocation();
    const { apiPost } = useFetch();
    const { fetchTeam } = useTeam();

    const submit = async e => {
        e.preventDefault();
        if (!loginValues.name || !loginValues.password) {
            // alert('Please fill out all the fields');
            toast.error("Please fill out all the fields");
        } else {
            setLoading(true);
            const res = await apiPost('/ctf/team-login', loginValues);
            if (res.ok) {
                const data = await res.json();
                window.localStorage.setItem('access-token', data.access_token);
                await fetchTeam();
                if (location.pathname === '/login') navigate('/play');
            } else {
                setLoading(false);
                toast.error("Invalid Username or Password");
                // window.alert('Invalid Username or Password');
            }
        }
    };

    return (
        <>
            <Toaster/>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <>
                    <form className='lug-form' onSubmit={submit}>
                        <div className='form-start'> Login </div>

                        <div className='form-field'>
                            <label> Username:  </label>
                            <input
                                type='text'
                                maxLength='128'
                                onChange={handleChange('user')}
                                value={loginValues.user}
                                className='text'
                            />
                        </div>

                        <div className='form-field'>
                            <label> Group Name: </label>
                            <input
                                type='text'
                                maxLength='128'
                                onChange={handleChange('name')}
                                value={loginValues.name}
                                className='text'
                            />
                        </div>

                        <div className='form-field'>
                            <label> Group Password: </label>
                            <input
                                type='password'
                                maxLength='16'
                                onChange={handleChange('password')}
                                value={loginValues.password}
                                className='text'
                            />
                        </div>
                        <div className='form-end'>
                            New user?, <NavLink to='/signup'><pre> register </pre></NavLink>
                            now and start the challenge.
                        </div>

                        <div className='form-end'>
                            <button type='submit' className='form-nav-button'>
                                Login
                            </button>
                        </div>
                    </form>
                </>
            )}
        </>
    );
}

