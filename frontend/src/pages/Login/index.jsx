import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await api.post('/session/login', { email, password })
      .then(response => {
        localStorage.setItem('user_name', response.data.user.name);
        localStorage.setItem('user_token', response.data.token);
        history.push('/home');
      })
      .catch(err => {
        alert('E-mail e/ou senha incorreto(s)');
        history.push('/login');
      });
  };

  return (
    <div className="login-container">
      <h1>Call Admin</h1>
      <div className="login-form">
        <h2>Entre com suas credênciais</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} />
          <input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;