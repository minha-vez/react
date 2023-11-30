import { Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';
import './App.css';

import { Home } from './pages/Home';
import { Filas } from './pages/Filas';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  const auth = useContext(AuthContext);
  
  return (
    <div className="App">
      <header>
        <h1>Minha Vez</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/filas">Filas</Link>
          {auth.email && <a href='javascript:;'>Sair</a>}
        </nav>
      </header>

      <hr />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filas" element={<RequireAuth><Filas /></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
