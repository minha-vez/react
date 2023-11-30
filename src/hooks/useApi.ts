import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.get(`/api/v1/auth/decode/${token}`);
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/api/v1/auth/authenticate', {email, password});
        console.log(`useApi: ${response.data}`);
        return response.data;

    },
    logout:async () => {
        const response = await api.post('/logout');
        return response.data;
    }
})