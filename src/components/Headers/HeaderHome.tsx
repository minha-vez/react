// HeaderFuncionario.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import logo from '../../assets/imagens/minha-vez-logo-completo.png';
import './headers.css';

const HeaderFuncionario: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <header>
      <nav className='navbar'>
        <div className="logo">
            <a href="/">
                <img src={logo} alt="Minha Vez"/>
            </a >
        </div>
        
        <div className='nav-links'>
            <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderFuncionario;
