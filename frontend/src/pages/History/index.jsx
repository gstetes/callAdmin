import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';

const History = () => {
  const token = localStorage.getItem('user_token');
  const history = useHistory();

  const [date, setDate] = useState('');
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  useEffect(() => {
    api.get('/calls', {
      params: { date: date },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        setCalls(response.data);
        console.log(response);
      })
      .catch(err => {
        alert('Erro ao recuperars chamados.');
        console.log(err);
      });
  }, [token, date]);

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="call-container">
        <h2>Data: <input type="text" placeholder="Digite a data (DD/M/AAAA)" value={date} onChange={handleChangeDate} /> </h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Funcionário</th>
              <th>Detalhe</th>
              <th>Urgência</th>
              <th>Concluido</th>
            </tr>
          </thead>
          <tbody>
            {calls.map(call => (
              <tr key={call.id_call}>
                <td>{call.id_call}</td>
                <td>{call.date}</td>
                <td>{call.time}</td>
                <td>{call.name}</td>
                <td>{call.detail}</td>
                <td>{call.emergency}</td>
                <td>{call.done === 1 ? 'SIM' : 'NÃO'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default History;