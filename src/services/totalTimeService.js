const API_URL = 'http://localhost:8080/totaltime';

const getAuthToken = () => {
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token');
};

const headers = {
    'Authorization': `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
};

export const toltalTimeService = {
    async getHealth() {
        const response = await fetch(`${API_URL}/health`, {
            headers  
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }
        return response.json();
    }
};