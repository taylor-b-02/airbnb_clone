import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import css from './LoginForm.module.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/"/>;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({credential, password})).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const handleDemo = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(
            sessionActions.login({credential: 'demo', password: 'Password1!'})
        ).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
    };

    return (
        <div id={css.loginContainer}>
            <form onSubmit={handleSubmit} id={'loginContainer'}>
                <div id={css.loginTitle}>Log in or sign up</div>
                <div id={css.fieldContainer}>
                    <div id={css.welcomeDiv}>Welcome to Airbnb</div>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div className={css.inputContainer} id={css.emailContainer}>
                        <input placeholder={"Email"}
                               className={css.inputField}
                               autoComplete={"off"} inputMode={"email"} type={"email"}
                               onChange={(e) => setCredential(e.target.value)}
                               value={credential}/>
                    </div>
                    <div className={css.inputContainer} id={css.passwordContainer}>
                        <input placeholder={"Password"}
                               className={css.inputField}
                               autoComplete={"off"} type={"password"}
                               onChange={(e) => setPassword(e.target.value)}
                               value={password}/>
                    </div>
                    <div>
                        <button className={css.styledButton}>Log in</button>
                        <button className={css.styledButton} id={css.demoButton} onClick={handleDemo}>Demo User</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginFormPage;
