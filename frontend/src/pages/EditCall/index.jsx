import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';

const EditCall = () => {
  const token = localStorage.getItem('user_token');
  const callId = localStorage.getItem('callId');
  const history = useHistory();

  const [worker, setWorker] = useState(0);
  const [detail, setDetail] = useState('');
  const [emergency, setEmergency] = useState('');
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  useEffect(() => {
    api.get('/workers', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setWorkers(response.data);
      })
      .catch(err => {
        alert('Erro ao carregar funcionários.');
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    api.get(`/calls/${callId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        const data = response.data[0];
        setWorker(data.id_worker);
        setDetail(data.detail);
        setEmergency(data.emergency);
      })
      .catch(err => {
        alert('Erro ao recuperar chamado.');
        console.log(err);
      });
  }, [callId, token]);

  const handleUpdateCall = (e) => {
    e.preventDefault();

    api.put(`/calls/${callId}`, {
      worker,
      detail,
      emergency,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        alert('Chamado atualizado.');
        history.push('/calls');
      })
      .catch(err => {
        alert('Erro ao atualizar chamado.');
        console.log(err);
      })
  };

  const handleChangeWorker = (e) => {
    setWorker(e.target.value);
  };

  const handleChangeDetail = (e) => {
    setDetail(e.target.value)
  };

  const handleChangeEmergency = (e) => {
    setEmergency(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="addcall-container">
        <div className="addcall-content">
          <h2>Insira as novas informações do chamado</h2>
          <form onSubmit={handleUpdateCall}>
            <select value={worker} onChange={handleChangeWorker}>
              <option hidden>Selecione o funcionário</option>
              {workers.map((w, index) => (
                <option key={index} value={w.id}>{w.name}</option>
              ))}
            </select>
            <textarea placeholder="Detalhe" value={detail} onChange={handleChangeDetail}></textarea>
            <select value={emergency} onChange={handleChangeEmergency}>
              <option hidden>Urgência</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCall;