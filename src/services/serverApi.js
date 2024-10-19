import axios from 'axios';

const SERVER_URL = "http://www.gamesxx.eu/api";

// Функция за получаване на данни от сървъра
export const fetchGameData = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching game data:', error);
        throw error;
    }
};

// Функция за изпращане на резултати към сървъра
export const sendResultToServer = async (result) => {
    try {
        const response = await axios.post(`${SERVER_URL}/submit`, { result });
        return response.data;
    } catch (error) {
        console.error('Error submitting result:', error);
        throw error;
    }
};