import { useState, useContext, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './index.css';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/filas');
            } else {
                alert("Não deu certo.");
            }
        }
    }

    return (

        <section className="login-container">
            <h2>Login</h2>
            
            <input
                type="text"
                value={email}
                onChange={handleEmailInput}
                placeholder="Digite seu e-mail"
            />
            <input
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Digite sua senha"
            />
            <div className="links">
                <div>
                    <a href="#">Registrar-se</a>
                </div>
                <div>
                    <a href="#">Esqueci a senha</a>
                </div>
            </div>
            <button onClick={handleLogin}>Logar</button>
            
        </section>
    );
}