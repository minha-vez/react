// HeaderFuncionario.tsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import logo from '../../assets/imagens/minha-vez-logo-completo.png';
import './headers.css';

const HeaderFuncionario: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.signout();
    navigate('/login')
  };

  return (
    <header>
      <nav className='navbar'>
        <div className="logo">
            <a href="/home">
                <img src={logo} alt="Minha Vez"/>
            </a >

        </div>
        
        <div className='nav-links'>
            <Link to="/" ><p>Resumo</p></Link>
            <Link to="/" ><p>Agendamento</p></Link>
            <Link to="/filas" ><p>Filas</p></Link>
            {auth.email && <button onClick={handleSignout}>Sair</button>}
        </div>
      </nav>
    </header>
  );
};

export default HeaderFuncionario;
