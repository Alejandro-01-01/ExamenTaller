import React, { useState } from 'react';
import LoginForm from './components/examen'; 

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (nombreDeUsuario, contraseña) => {
    console.log('Logged in:', { nombreDeUsuario, contraseña });
    setUser({ nombreDeUsuario });
  };

  return (
    <div className="container text-center">
      <div className="row mt-3">
        {user ? (
          <h2> {user.nombreDeUsuario}!</h2>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
