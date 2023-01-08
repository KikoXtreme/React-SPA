import { useState } from 'react';
import { submit } from '../../services/Submit';
import './form.css';

export const Form = () => {
    const [error, setError] = useState({});
    const [user, setUser] = useState([]);

    const userLogin = (userData) => {
        setUser(userData);
    }

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        gender: 'm',
        userType: 'user',
        tac: false,
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // const userData = Object.fromEntries(new FormData(e.target));
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const age = formData.get('age');
        const gender = formData.get('gender');
        const userType = formData.get('userType');
        const tac = formData.get('tac');
        const date = formData.get('date');

        console.log(username);
        console.log(email);
        console.log(password);
        console.log(age);
        console.log(gender);
        console.log(userType);
        console.log(tac);
        console.log(date);

        submit(username, email, age, gender, userType, tac, date)
            .then(userData => {
                userLogin(userData);
            })
    }

    const validateUsername = (e) => {
        const username = e.target.value;
        let errorUserMsg = '';

        if (username.length < 3) {
            errorUserMsg = 'Username must be at least 3 characters long';
        } else if (username.length > 10) {
            errorUserMsg = 'Username must be at max 10 characters long';
        }

        setError(state => ({
            ...state,
            errorUserMsg,
        }));
    }

    const validateEmail = (e) => {
        const email = e.target.value;
        let errorEmailMsg = '';

        if (!/.{3,}@(gmail|yahoo|abv)\.(bg|com)$/.test(email)) {
            errorEmailMsg = 'Please enter valid email';
        }

        setError(state => ({
            ...state,
            errorEmailMsg,
        }));
    }

    const validatePassword = (e) => {
        const password = e.target.value;
        let errorPassMsg = '';

        if (password.length < 3) {
            errorPassMsg = 'Password must be at least 3 characters long';
        }

        setError(state => ({
            ...state,
            errorPassMsg,
        }));
    }

    const validateAge = (e) => {
        const age = e.target.value;
        let errorAgeMsg = '';

        if (age < 18) {
            errorAgeMsg = 'User must be at least 18 years old';
        }

        setError(state => ({
            ...state,
            errorAgeMsg,
        }));
    }

    const validateTac = (e) => {
        // const tac = e.target.value;
        let errorTacMsg = '';

        if (values.tac === false) {
            errorTacMsg = 'Please click on the checkbox to continue';
        }

        setError(state => ({
            ...state,
            errorTacMsg,
        }));
    }

    const validateDate = (e) => {
        const date = e.target.value;
        let errorDateMsg = '';

        if (date === '') {
            errorDateMsg = 'Date is required';
        }

        setError(state => ({
            ...state,
            errorDateMsg,
        }));
    }

    return (
        <section id="form-page">
            <form className="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>React SPA Form</h1>

                    <p className="field">
                        <label htmlFor="username"><span><i className="fas fa-user-astronaut"></i></span></label>
                        <input
                            className={error.errorUserMsg ? "input-error" : null}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onBlur={validateUsername}
                        />
                    </p>
                    {error.errorUserMsg && <div className="errors">{error.errorUserMsg}</div>}

                    <p className="field">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            className={error.errorEmailMsg ? "input-error" : null}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="kiril.valkov@yahoo.com"
                            onBlur={validateEmail}
                        />
                    </p>
                    {error.errorEmailMsg && <div className="errors">{error.errorEmailMsg}</div>}

                    <p className="field">
                        <label htmlFor="password"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            className={error.errorPassMsg ? "input-error" : null}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                            onBlur={validatePassword}
                        />
                    </p>
                    {error.errorPassMsg && <div className="errors">{error.errorPassMsg}</div>}

                    <p className="field">
                        <label htmlFor="age"><span><i className="fa-solid fa-arrow-down-1-9"></i></span></label>
                        <input
                            className={error.errorAgeMsg ? "input-error" : null}
                            type="number"
                            name="age"
                            id="age"
                            placeholder="18"
                            onBlur={validateAge}
                        />
                    </p>
                    {error.errorAgeMsg && <div className="errors">{error.errorAgeMsg}</div>}

                    <p className="field">
                        <label htmlFor="gender"><span><i className="fa-solid fa-venus-mars"></i></span></label>
                        <select
                            className="null"
                            name="gender"
                            id="gender"
                            value={values.gender}
                            onChange={changeHandler}
                        >
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </p>

                    <p className="field">
                        <label htmlFor="date"><span><i className="fa-solid fa-calendar-days"></i></span></label>
                        <input
                            className={error.errorDateMsg ? "input-error" : null}
                            type="date"
                            name="date"
                            id="date"
                            placeholder="date"
                            onBlur={validateDate}
                        />
                    </p>
                    {error.errorDateMsg && <div className="errors">{error.errorDateMsg}</div>}

                    <p className="field">
                        <label htmlFor="avatar"><span><i className="fa-solid fa-file-image"></i></span></label>
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                        />
                    </p>

                    <p className="field">
                        <label htmlFor="user-user-type">Logged User</label>
                        <input
                            type="radio"
                            name="userType"
                            value="user"
                            id="user-user-type"
                            onChange={changeHandler}
                            checked={values.userType === 'user'}
                        />

                        <label htmlFor="guest-user-type">Guest User</label>
                        <input
                            type="radio"
                            name="userType"
                            value="guest"
                            id="guest-user-type"
                            onChange={changeHandler}
                            checked={values.userType === 'guest'}
                        />
                    </p>

                    <p className="field">
                        <label htmlFor="tac">React SPA Form Terms and Conditions:</label>
                        <input
                            // className={error.errorTacMsg ? "input-error" : null}
                            type="checkbox"
                            name="tac"
                            id="tac"
                            checked={values.tac}
                            onChange={changeHandler}
                            onBlur={validateTac}
                        />
                    </p>
                    {error.errorTacMsg && <div className="errors">{error.errorTacMsg}</div>}

                    <button type='submit' disabled={!values.tac}>Submit Form</button>
                </div>
            </form>
        </section>
    );
}