import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';

const AddWorker = () => {
  const token = localStorage.getItem('user_token');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  const handleIncludeUser = (e) => {
    e.preventDefault();

    api.post('/users', {
      name,
      email,
      password,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        alert('Usuário cadastrado!');
        history.push('/users');
      })
      .catch(err => {
        alert('Erro ao cadastrar usuário!');
        console.log(err);
      })
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="adduser-container">
        <div className="adduser-content">
          <h2>Insira as informações do usuário</h2>
          <form onSubmit={handleIncludeUser}>
            <input type="text" placeholder="Nome" value={name} onChange={handleChangeName} />
            <input type="email" placeholder="E-mail" value={email} onChange={handleChangeEmail} />
            <input type="password" placeholder="Senha" value={password} onChange={handleChangePassword} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWorker;