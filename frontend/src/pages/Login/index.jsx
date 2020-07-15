import React from 'react';
import './styles.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Call Admin</h1>
      <div className="login-form">
        <h2>Entre com suas credênciais</h2>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;