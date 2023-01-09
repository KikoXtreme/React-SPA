export const validateUsername = (e, setError) => {
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

export const validateEmail = (e, setError) => {
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

export const validatePassword = (e, setError) => {
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

export const validateAge = (e, setError) => {
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

export const validateDate = (e, setError) => {
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

export const validateTime = (e, setError) => {
    const time = e.target.value;
    let errorTimeMsg = '';

    if (time === '') {
        errorTimeMsg = 'Time is required';
    }

    setError(state => ({
        ...state,
        errorTimeMsg,
    }));
}