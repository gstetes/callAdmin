import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';

const AddWorker = () => {
  const token = localStorage.getItem('user_token');

  const history = useHistory();

  const [name, setName] = useState('');
  const [ramal, setRamal] = useState('');
  const [section, setSection] = useState('');

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  const handleInsertWorker = (e) => {
    e.preventDefault();

    api.post('/workers', {
      name,
      ramal,
      section,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        alert('Funcionário cadastrado.');
        history.push('/workers');
      })
      .catch(err => {
        alert('Erro ao cadastrar funcionário.');
        console.log(err);
      });
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeRamal = (e) => {
    setRamal(e.target.value);
  };

  const handleChangeSection = (e) => {
    setSection(e.target.value);
  };
  return (
    <>
      <Header />
      <div className="addworker-container">
        <div className="addworker-content">
          <h2>Insira as informações do funcionário</h2>
          <form onSubmit={handleInsertWorker}>
            <input type="text" placeholder="Nome" value={name} onChange={handleChangeName} />
            <input type="text" placeholder="Ramal" value={ramal} onChange={handleChangeRamal} />
            <input type="text" placeholder="Setor" value={section} onChange={handleChangeSection} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWorker;