import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';

const EditUser = () => {
  const token = localStorage.getItem('user_token');

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    api.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setId(response.data.id);
        setName(response.data.name);
        setEmail(response.data.email);

        localStorage.removeItem('userId');
      })
      .catch(err => {
        alert('Erro ao carregar usuário');
        console.log(err);
      });
  }, [token]);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    if (password === '') {
      alert('O campo de senha não pode ser vazio.');
      return;
    };

    api.put(`/users/${id}`, {
      name,
      email,
      password,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        alert('Usuário alterado!');
        history.push('/users');
      })
      .catch(err => {
        alert('Erro ao atualizar usuário!');
        console.log(err);
      });
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
      <div className="edituser-container">
        <div className="edituser-content">
          <h2>Insira as novas informações do usuário</h2>
          <form onSubmit={handleUpdateUser}>
            <input type="text" disabled value="1" value={id} />
            <input type="text" placeholder="Nome" value={name} onChange={handleChangeName} />
            <input type="email" placeholder="E-mail" value={email} onChange={handleChangeEmail} />
            <input type="password" placeholder="Senha" value={password} onChange={handleChangePassword} />
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;