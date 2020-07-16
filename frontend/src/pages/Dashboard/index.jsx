import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard = () => {
  const token = localStorage.getItem('user_token');
  const history = useHistory();

  const [callsToday, setCallsToday] = useState('');
  const [totalCalls, setTotalCalls] = useState('');
  const [totalWorkers, setTotalWorkers] = useState('');
  const [totalUsers, setTotalUsers] = useState('');

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    api.get('/dashboard', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        const data = response.data
        setCallsToday(data.calls.today);
        setTotalCalls(data.calls.total);
        setTotalWorkers(data.workers.total);
        setTotalUsers(data.users.total);
      })
  }, []);

  return (
    <>
      <Header />
      <div className="dash-container">
        <h1>Dashboard</h1>
        <div className="dash-content">
          <section>
            <h2>Chamados</h2>
            <p>Chamados hoje: <strong>{callsToday}</strong></p>
            <p>Chamados total: <strong>{totalCalls}</strong></p>
          </section>
          <section>
            <h2>Funcionários</h2>
            <p>Total de funcionários: <strong>{totalWorkers}</strong></p>
          </section>
          <section>
            <h2>Usuários</h2>
            <p>Total de usuários: <strong>{totalUsers}</strong></p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;