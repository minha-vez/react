import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.get(`/api/v1/auth/decode/${token}`);
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/api/v1/auth/authenticate', { email, password });
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
    getTickets: async (filaId: number, config?: AxiosRequestConfig) => {
        const response = await api.get(`/tickets/fila/${filaId}`, config);
        
        return response;
    },
    closeTicket: async (ticketId:any, config?: AxiosRequestConfig) => {
        
        await api.patch(`/tickets/ticket/finalizar/${ticketId}`,undefined, config)
    },
    callNext: async (ticketId:any, config?: AxiosRequestConfig) => {
        
        await api.patch(`/tickets/ticket/atender/${ticketId}`,undefined, config)
    }
});
