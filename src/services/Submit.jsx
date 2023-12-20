const url = 'https://webhook.site/ee43433e-f646-4057-8cde-c75a788321dc'; // url provided for test purposes

export const sendUserData = async (userData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(userData)
        });
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}