// FilaCliente.tsx
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const FilaCliente: React.FC = () => {
  const auth = useContext(AuthContext);

  console.log(`app: ${auth.role}`);
  
  return (
    <div>Sua Fila</div>
  );
};

export default FilaCliente;
