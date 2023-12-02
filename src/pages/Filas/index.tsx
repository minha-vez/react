import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/useApi';
import './filas.css';

export const Filas = () => {
    const auth = useContext(AuthContext);
    const api = useApi();
    const token = localStorage.getItem('authToken');

    interface Ticket {
        id: number;
        nomePessoa: string;
        ordem: number;
        nomeEmpresa: string;
        statusAtendimento: string;
        isPreferencial: boolean;
        // outras propriedades do ticket
    }
    
    const [filaGeral, setFilaGeral] = useState<Ticket[]>([]);
    const [filaPref, setFilaPref] = useState<Ticket[]>([]);
    var update = 0;

    useEffect(() => {
        console.log('useEffect foi acionado');
        console.log(filaGeral);
        console.log(filaPref);
    
        const fetchTickets = async () => {
            try {    
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
    }, [update]);
    
    const handleProximo = async (ticketAtendId : number, fila : Ticket[]) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        

        await api.closeTicket(ticketAtendId, config);

        console.log('passou request closeTicket')

        const nextTicket = fila.filter(objeto => objeto.statusAtendimento === "ESPERA")[0].id;

        console.log('fila ' + nextTicket);
        await api.callNext(nextTicket, config);

        console.log('passou request closeTicket')
        window.location.reload();
    }

    return (
        <div>
            <h2>Filas</h2>

            <div className='fila-geral '>
                
                {filaGeral.map((ticket, index) => (
                    ticket.statusAtendimento === 'ATENDIMENTO' 
                    &&
                    
                    <div className='em-atendimento '>
                        <button onClick={() => handleProximo(ticket.id, filaGeral)}>Próximo</button>

                        <p className='tipo-fila'>Fila geral</p>

                        <p key={index} className='nome'> {ticket.nomePessoa}</p>

                        <p className='status'> Em {ticket.statusAtendimento.toLowerCase()} </p>
                    </div>
                
                    
                ))}

                {filaGeral.map((ticket, index) => (
                   ticket.statusAtendimento === 'ESPERA' 
                    &&
                    <div className='em-espera  '>
                        <p key={index} className='nome'> {ticket.nomePessoa}</p>

                        <p className='status'> Em {ticket.statusAtendimento.toLowerCase()} </p>
                    </div> 
                ))}
            </div>

            <div className='fila-pref '>
                
                {filaPref.map((ticket, index) => (
                    ticket.statusAtendimento === 'ATENDIMENTO' 
                    &&
                    
                    <div className='em-atendimento '>
                        <button onClick={() => handleProximo(ticket.id, filaPref)}>Próximo</button>

                        <p className='tipo-fila'>Fila geral</p>

                        <p key={index} className='nome'> {ticket.nomePessoa}</p>

                        <p className='status'> Em {ticket.statusAtendimento.toLowerCase()} </p>
                    </div>
                
                    
                ))}

                {filaPref.map((ticket, index) => (
                   ticket.statusAtendimento === 'ESPERA' 
                    &&
                    <div className='em-espera  '>
                        <p key={index} className='nome'> {ticket.nomePessoa}</p>

                        <p className='status'> Em {ticket.statusAtendimento.toLowerCase()} </p>
                    </div> 
                ))}
            </div>
            
        </div>
    );
};
