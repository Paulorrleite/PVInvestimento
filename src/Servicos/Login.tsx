import axios from 'axios';
import {Usuario} from '../Interfaces/Usuario'

const apiClient = axios.create({
    baseURL: 'https://37b4pnp5-5165.brs.devtunnels.ms/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const login = (dadosUsuario: Usuario) => {
    return apiClient.post('/Login/login', dadosUsuario)
}

export const FetchShareListPaged = async (page: number, resultsByPage: number) =>{
    try {
        const response = await apiClient.get(`/Share/${page}, ${resultsByPage}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar lista de ações paginada: ', error);
        throw error;
    }
}