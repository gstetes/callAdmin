import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import { FaPen, FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';

const Workers = () => {
  const history = useHistory();

  const token = localStorage.getItem('user_token');

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
        console.log(err);
      });
  }, [token, workers]);

  const handleDeleteUser = (id) => {
    api.delete(`/workers/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .catch(err => {
        alert('Erro ao deletar funcionário!');
        console.log(err);
      });
  };

  const handleUpdateUser = (id) => {
    localStorage.setItem('workerId', id);
    history.push(`/workers/edit/${id}`);
  };

  return (
    <>
      <Header />
      <div className="worker-container">
        <div className="btns">
          <Link id="addWorker" to="/workers/add">Novo Funcionário</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ramal</th>
              <th>Nome</th>
              <th>Setor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {workers.map(worker => (
              <tr>
                <td>{worker.id}</td>
                <td>{worker.ramal}</td>
                <td>{worker.name}</td>
                <td>{worker.section}</td>
                <td>
                  <FaPen size="15" color="FF0" onClick={() => { handleUpdateUser(worker.id) }} />
                  <FaTrashAlt size="15" color="F00" onClick={() => { handleDeleteUser(worker.id) }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default Workers;