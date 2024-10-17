import React, { useState } from 'react';

function LoginForm() {
  const [nombreDeUsuario, setNombreDeUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre de Usuario:', nombreDeUsuario);
    console.log('Contraseña:', contraseña);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="login-form">
        <h2>Inicio de Sesion</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Usuario:</label>
            <input 
              type="text" 
              value={nombreDeUsuario} 
              onChange={(e) => setNombreDeUsuario(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input 
              type="password" 
              value={contraseña} 
              onChange={(e) => setContraseña(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
