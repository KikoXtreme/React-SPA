const url = 'https://www.toptal.com/developers/postbin/1673253104326-4398864065296';

// export const submit = async (userData) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(userData)
//     });

//     const result = await response.json();

//     return result;
// }

export const request = async (method, url, data) => {
    try {
        let headers = {};

        let currentRequest = fetch(url, {
            method,
            headers: {
                ...headers,
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const response = await currentRequest;
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}

const post = request.bind({}, 'POST');

export const submit = (username, email, age, gender, userType, tac, date) => {
    post(`${url}`, { username, email, age, gender, userType, tac, date })
};