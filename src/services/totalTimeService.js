const API_URL = 'http://localhost:8080/totaltime';

const getAuthToken = () => {
  return localStorage.getItem('token');
};

const getHeaders = () => ({
  'Authorization': `Bearer ${getAuthToken()}`,
  'Content-Type': 'application/json',
});

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'An error occurred');
  }
  return response.json();
};

export const totalTimeService = {
  async getTotalTime(userID) {
    const response = await fetch(`${API_URL}/current/user/${userID}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  async createTotalTime(userID, companyId) {
    const response = await fetch(`${API_URL}/user/${userID}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ companyId }), 
    });
    return handleResponse(response);
  },

  async closeTotalTime(userID) {
    const response = await fetch(`${API_URL}/user/${userID}`, {
      method: 'PUT',
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  async checkHealth(userID) {
    const response = await fetch(`${API_URL}/user/${userID}/health`, {
      method: 'GET',
      headers: getHeaders(),
    });
    return handleResponse(response);
  },
};
