import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/useApi';
import './filas.css';

export const Filas = () => {
    const auth = useContext(AuthContext);
    const api = useApi();

    interface Ticket {
        nomePessoa: string;
        ordem: number;
        nomeEmpresa: string;
        statusAtendimento: string;
        isPreferencial: boolean;
        // outras propriedades do ticket
    }
    
    const [filaGeral, setFilaGeral] = useState<Ticket[]>([]);
    const [filaPref, setFilaPref] = useState<Ticket[]>([]);
    const teste = 0;

    useEffect(() => {
        console.log('useEffect foi acionado');
        console.log(filaGeral);
        console.log(filaPref);
    
        const fetchTickets = async () => {
            try {
                const token = localStorage.getItem('authToken');
    
                if (token) {
                    const filaPrefId = 2;
                    const filaGeralId = 1
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    };
    
                    const responseGeral = await api.getTickets(filaGeralId, config);
                    const responsePref = await api.getTickets(filaPrefId, config);
    
                    setFilaGeral(responseGeral.data);
                    setFilaPref(responsePref.data);
                } else {
                    console.error('Token de autenticação não disponível.');
                }
            } catch (error) {
                console.error('Erro ao obter tickets:', error);
            }
        };
    
        fetchTickets();
    }, [teste]);
    

    return (
        <div>
            <h2>Filas</h2>

            <div className='geral border'>
                {filaGeral.map((ticket, index) => (
                    ticket.statusAtendimento === 'ATENDIMENTO' 
                    ? 
                    <div className='emAtendimento border'>
                        <p>Fila geral</p>

                        <p key={index}> {ticket.nomePessoa}</p>
                        <p> Em {ticket.statusAtendimento.toLowerCase()} </p>
                    </div>
                    :
                    <div className='emEspera border '>
                        <p key={index}> {ticket.nomePessoa}</p>
                        <p> Em {ticket.statusAtendimento.toLowerCase()} </p>
                    </div>
                ))}
            </div>

            <div className='preferencial border'>
                {filaPref.map((ticket, index) => (
                    ticket.statusAtendimento === 'ATENDIMENTO' 
                    ? 
                    <div className='emAtendimento border'>
                        <p>Fila geral</p>

                        <p key={index}>{ticket.statusAtendimento} {ticket.nomePessoa}</p>
                    </div>
                    :
                    <div className='emEspera border'>
                        <p key={index}>{ticket.statusAtendimento} {ticket.nomePessoa}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
};
