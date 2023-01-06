import './forms.css';

export const Forms = () => {

    const onSubmit = (e) => {
        console.log(e.target);
    }

    return (
        <section id="register-page">
            <form className="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <p className="field field-icon">
                        <label htmlFor="username"><span><i className="fas fa-user-astronaut"></i></span></label>
                        <input
                            // className={error.errorUserMsg ? "input-error" : null}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                        // onBlur={validateUsername}
                        />
                    </p>
                    {/* {error.errorUserMsg && <div className="errors">{error.errorUserMsg}</div>} */}

                    <p className="field field-icon">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            // className={error.errorEmailMsg ? "input-error" : null}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="kiril.valkov@yahoo.com"
                        // onBlur={validateEmail}
                        />
                    </p>
                    {/* {error.errorEmailMsg && <div className="errors">{error.errorEmailMsg}</div>} */}

                    <p className="field field-icon">
                        <label htmlFor="password"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            // className={error.errorPassMsg ? "input-error" : null}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                        // onBlur={validatePassword}
                        />
                    </p>
                    {/* {error.errorPassMsg && <div className="errors">{error.errorPassMsg}</div>} */}

                    <p className="field field-icon">
                        <label htmlFor="repass"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            // className={error.errorRepassMsg ? "input-error" : null}
                            type="password"
                            name="repass"
                            id="repass"
                            placeholder="*****"
                        // onBlur={validateRepass} 
                        />
                    </p>
                    {/* {error.errorRepassMsg && <div className="errors">{error.errorRepassMsg}</div>} */}

                    <p className="field field-icon">
                        <label htmlFor="counry"><span><i className="fas fa-globe"></i></span></label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Bulgaria (optional)" />
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