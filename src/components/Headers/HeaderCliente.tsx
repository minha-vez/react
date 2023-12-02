// HeaderCliente.tsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './headers.css';
import logo from '../../assets/imagens/minha-vez-logo-completo.png';

const HeaderCliente: React.FC = () => {
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
            <Link to="/" ><p>Home</p></Link>
            <Link to="/" ><p></p></Link>
            <Link to="/" ><p>Perfil</p></Link>
            <Link to="/filas" ><p>Sua fila</p></Link>
            {auth.email && <button onClick={handleSignout}>Sair</button>}
        </div>
      </nav>
    </header>
  );
};

export default HeaderCliente;
