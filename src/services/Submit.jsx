const url = 'https://webhook.site/ee43433e-f646-4057-8cde-c75a788321dc';

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

export const sendUserData = async (data) => {
    try {
        let currentRequest = fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        const response = await currentRequest;
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}