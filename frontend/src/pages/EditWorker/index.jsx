import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';

const EditWorker = () => {
  const token = localStorage.getItem('user_token');

  const history = useHistory();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ramal, setRamal] = useState('');
  const [section, setSection] = useState('');

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  useEffect(() => {
    const workerId = localStorage.getItem('workerId');

    api.get(`/workers/${workerId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setId(response.data.id);
        setName(response.data.name);
        setRamal(response.data.ramal);
        setSection(response.data.section);

        localStorage.removeItem('workerId');
      })
      .catch(err => {
        alert('Erro ao carregar usuário.');
        console.log(err);
      });
  }, [token]);

  const handleUpdateWorker = (e) => {
    e.preventDefault();

    api.put(`/workers/${id}`, {
      name,
      ramal,
      section,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        alert('Funcionário atualizado.');
        history.push('/workers');
      })
      .catch(err => {
        alert('Erro ao atualizar funcionário.');
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
      <div className="editworker-container">
        <div className="editworker-content">
          <h2>Insira as novas informações do funcionário</h2>
          <form onSubmit={handleUpdateWorker}>
            <input type="text" disabled value={id} />
            <input type="text" placeholder="Nome" value={name} onChange={handleChangeName} />
            <input type="text" placeholder="Ramal" value={ramal} onChange={handleChangeRamal} />
            <input type="text" placeholder="Setor" value={section} onChange={handleChangeSection} />
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditWorker;