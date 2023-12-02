// App.tsx
import React, { useContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/Auth/AuthContext';
import './App.css';
import { Home } from './pages/Home';
import { Filas } from './pages/Filas';
import FilaCliente from './pages/FilaCliente/index'
import HeaderFuncionario from './components/Headers/HeaderFuncionario';
import HeaderCliente from './components/Headers/HeaderCliente';
import HeaderHome from './components/Headers/HeaderHome'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Login } from './pages/Login';

const App: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleSignout = () => {
  //   auth.signout();
  //   navigate('/');
  // };

  const renderHeader = () => {
    if (!auth.email) {
      // Header padrão para usuário não logado
      return (
          <HeaderHome />
      );
    }

    // Escolher o header com base na role do usuário
    if (auth.role !== 'ROLE_CLIENTE') {
      return <HeaderFuncionario />;
    } else if (auth.role === 'ROLE_CLIENTE') {
      return <HeaderCliente />;
    }

    return null;
  };

  return (
    <div className="App">
      {renderHeader()}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={!auth.email ? <Login /> : null} />
        <Route path="/filas" element={auth.role !== 'ROLE_CLIENTE' ? <RequireAuth><Filas /></RequireAuth> : null} />
        <Route path="/sua-fila" element={auth.role === 'ROLE_CLIENTE' ? <RequireAuth><FilaCliente /></RequireAuth> : null} />
      </Routes>
    </div>
  );
};

export default App;
