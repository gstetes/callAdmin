import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import { FaCheckCircle, FaPen, FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';

const Calls = () => {
  const history = useHistory();
  const token = localStorage.getItem('user_token');

  const date = new Date();
  const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const [calls, setCalls] = useState([]);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  useEffect(() => {
    api.get('/calls', {
      params: { date: today },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        setCalls(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [today, token, calls]);

  const handleDeleteCall = (id) => {
    api.delete(`/calls/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .catch(err => {
        alert('Erro ao excluir chamado.');
        console.log(err);
      });
  };

  const handleUpdateCall = (id) => {
    localStorage.setItem('callId', id);
    history.push(`/calls/edit/${id}`);
  };

  const handleCallDone = (id) => {
    api.put(`/calls/${id}`, { done: 1 }, { headers: { Authorization: `Bearer ${token}` } })
  };

  const handleCallUndo = (id) => {
    api.put(`/calls/${id}`, { done: 0 }, { headers: { Authorization: `Bearer ${token}` } })
  };

  return (
    <>
      <Header />
      <div className="call-container">
        <div className="btns">
          <Link id="addCall" to="/calls/add">Novo Chamado</Link>
          <Link id="hist" to="history">Histórico</Link>
        </div>
        <h2>Data: {today}</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hora</th>
              <th>Funcionário</th>
              <th>Detalhe</th>
              <th>Urgência</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {calls.map((call, index) => (
              <tr key={index}>
                <td className={call.done === 1 ? 'done' : ''}>{call.id_call}</td>
                <td className={call.done === 1 ? 'done' : ''} >{call.time}</td>
                <td className={call.done === 1 ? 'done' : ''}>{call.name}</td>
                <td className={call.done === 1 ? 'done' : ''}>{call.detail}</td>
                <td className={call.done === 1 ? 'done' : ''}>{call.emergency}</td>
                <td>
                  <FaCheckCircle
                    size="15"
                    color={call.done === 1 ? 'F00' : '0F0'}
                    onClick={() => call.done === 1 ? handleCallUndo(call.id_call) : handleCallDone(call.id_call)} />
                  <FaPen size="15" color="FF0" onClick={() => { handleUpdateCall(call.id_call) }} />
                  <FaTrashAlt size="15" color="F00" onClick={() => { handleDeleteCall(call.id_call) }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default Calls;