import { useState } from 'react';
import './form.css';

export const Form = () => {
    const [error, setError] = useState({});
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        gender: 'f',
        // userType: 'corporate',
        // tac: false,
        // egn: '',
        // eik: '',
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
        // const country = formData.get('country');


        console.log(username);
        console.log(email);
        console.log(password);
        console.log(age);
        console.log(gender);
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

    return (
        <section id="register-page">
            <form className="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>React SPA Form</h1>

                    <p className="field field-icon">
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

                    <p className="field field-icon">
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

                    <p className="field field-icon">
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

                    <p className="field field-icon">
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

                    <p className="field field-icon">
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

                    <p className="field field-icon">
                        <label htmlFor="individual-user-type"><span><i className="fas fa-user-astronaut"></i></span>adf</label>
                        <input
                            type="radio"
                            name="userType"
                            value="individual"
                            id="individual-user-type"
                            onChange={changeHandler}
                            checked={values.userType === 'individual'}
                        />
                        
                        <label htmlFor="corporate-user-type"><span><i className="fas fa-user-astronaut"></i></span>Corporate:</label>
                        <input
                            type="radio"
                            name="userType"
                            value="corporate"
                            id="corporate-user-type"
                            onChange={changeHandler}
                            checked={values.userType === 'corporate'}
                        />
                    </p>




                    {/* <input className="btn submit" type="submit" defaultValue="Register" /> */}
                    <button type='submit'>Create Account</button>
                    <p className="text-center">
                        {/* <span>Already registered? <Link to="/users/login">Log In</Link></span> */}
                    </p>
                </div>
            </form>
        </section>
    );
}