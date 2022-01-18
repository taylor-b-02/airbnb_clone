import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as sessionActions from '../../store/session';
import css from './SignupForm.module.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthdate, setBirthdate] = useState('')
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/"/>;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('FNAME:', firstName);
        console.log('LNAME:', lastName);
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(
                sessionActions.signup({
                    firstName,
                    lastName,
                    email,
                    birthdate,
                    password,
                })
            ).catch(async (res) => {
                const data = await res.json();
                console.log(data);
                if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors([
            'Confirm Password field must be the same as the Password field',
        ]);
    };

    return (
        <div id={css.signupContainer}>
            <form onSubmit={handleSubmit} id={'loginContainer'}>
                <div id={css.signupTitle}>Sign up</div>
                <div id={css.fieldContainer}>
                    <div id={css.welcomeDiv}>Welcome to Airbnb</div>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div className={css.inputContainer} id={css.fNameContainer}>
                        <input placeholder={"First name"}
                               className={css.inputField}
                               autoComplete={"off"} type={"text"}
                               onChange={(e) => setFirstName(e.target.value)}
                               value={firstName}
                               required={true}
                        />
                    </div>
                    <div className={css.inputContainer} id={css.lNameContainer}>
                        <input placeholder={"Last name"}
                               className={css.inputField}
                               autoComplete={"off"} type={"text"}
                               onChange={(e) => setLastName(e.target.value)}
                               value={lastName}
                               required={true}
                        />
                    </div>
                    <div id={css.fieldCaption}>Make sure it matches the name on your government ID.</div>
                    <div className={css.inputContainer} id={css.bdayContainer}>
                        <input placeholder={"Birthdate"}
                               className={css.inputField}
                               autoComplete={"off"} type={"date"}
                               onChange={(e) => setBirthdate(e.target.value)}
                               value={birthdate}
                               required={true}
                        />
                    </div>
                    <div id={css.fieldCaption}>To sign up, you must be at least 18. Your birthday won't be shared
                        with other people who use Airbnb.
                    </div>
                    <div className={css.inputContainer} id={css.emailContainer}>
                        <input placeholder={"Email"}
                               className={css.inputField}
                               autoComplete={"off"} type={"email"}
                               onChange={(e) => setEmail(e.target.value)}
                               value={email}
                               required={true}
                        />
                    </div>
                    <div id={css.fieldCaption}>You'll use this to log into your account.</div>
                    <div className={css.inputContainer} id={css.passwordField}>
                        <input placeholder={"Password"}
                               className={css.inputField}
                               autoComplete={"off"} type={"password"}
                               onChange={(e) => setPassword(e.target.value)}
                               value={password}
                               required={true}
                        />
                    </div>
                    <div className={css.inputContainer} id={css.cPasswordField}>
                        <input placeholder={"Confirm Password"}
                               className={css.inputField}
                               autoComplete={"off"} type={"password"}
                               onChange={(e) => setConfirmPassword(e.target.value)}
                               value={confirmPassword}
                               required={true}
                        />
                    </div>
                    <div>
                        <button className={css.styledButton} type={"submit"}>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignupFormPage;
