const API_URL = 'http://localhost:8080/totaltime';

const getAuthToken = () => {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
};

const headers = {
    'Authorization': `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
};

export const totalTimeService = {
    async getTotalTime(userID) {
        const response = await fetch(`${API_URL}/current/user/${userID}`, {
            method: 'GET',
            headers,
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }
        console.log(response)
        return response.json();
    }
};