import { useState } from 'react';
import { sendUserData } from '../../services/Submit';
import { validateAge, validateDate, validateEmail, validatePassword, validateTime, validateUsername } from './Validations';
import './form.css';

export const Form = () => {
    const [error, setError] = useState({});
    const [user, setUser] = useState([]);

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        gender: 'm',
        userType: 'user',
        tac: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const userData = Object.fromEntries(new FormData(e.target));

        await sendUserData(userData)
            .then(result => {
                setUser(result);
                console.log(result);
                console.log(user);
            })
    }

    return (
        <section id="form-page">
            <form className="form" onSubmit={onSubmit}>
                <div className="container">
                    <h1>React Test Validation Form Fields</h1>

                    <p className="field">
                        <label htmlFor="username"><span><i className="fas fa-user-astronaut"></i></span></label>
                        <input
                            className={error.errorUserMsg ? "input-error" : null}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onBlur={(e) => validateUsername(e, setError)}
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
                            onBlur={(e) => validateEmail(e, setError)}
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
                            onBlur={(e) => validatePassword(e, setError)}
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
                            onBlur={(e) => validateAge(e, setError)}
                        />
                    </p>
                    {error.errorAgeMsg && <div className="errors">{error.errorAgeMsg}</div>}

                    <p className="field">
                        <label htmlFor="gender"><span><i className="fa-solid fa-mars-and-venus"></i></span></label>
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
                            onBlur={(e) => validateDate(e, setError)}
                        />
                    </p>
                    {error.errorDateMsg && <div className="errors">{error.errorDateMsg}</div>}

                    <p className="field">
                        <label htmlFor="time"><span><i className="fa-sharp fa-solid fa-clock"></i></span></label>
                        <input
                            className={error.errorTimeMsg ? "input-error" : null}
                            type="time"
                            name="time"
                            id="time"
                            placeholder="time"
                            onBlur={(e) => validateTime(e, setError)}
                        />
                    </p>
                    {error.errorTimeMsg && <div className="errors">{error.errorTimeMsg}</div>}

                    <p className="field">
                        <label htmlFor="avatar"><span><i className="fa-solid fa-file-image"></i></span></label>
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                        />
                    </p>

                    <p className="field radio">
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

                    <p className="field tac">
                        <label htmlFor="tac">Validation Form Terms and Conditions:</label>
                        <input
                            type="checkbox"
                            name="tac"
                            id="tac"
                            checked={values.tac}
                            onChange={changeHandler}
                        />
                    </p>
                    {error.errorTacMsg && <div className="errors">{error.errorTacMsg}</div>}

                    <button type='submit' disabled={!values.tac} title={!values.tac ? "Please check Terms and Conditions" : ""}>
                        Submit Form
                    </button>
                </div>
            </form>
        </section>
    );
}