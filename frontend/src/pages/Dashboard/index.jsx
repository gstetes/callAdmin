import React from 'react';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dash-container">
        <h1>Dashboard</h1>
        <div className="dash-content">
          <section>
            <h2>Chamados</h2>
            <p>Chamados hoje: <strong>15</strong></p>
            <p>Chamados total: <strong>45</strong></p>
          </section>
          <section>
            <h2>Funcionários</h2>
            <p>Total de funcionários: <strong>32</strong></p>
          </section>
          <section>
            <h2>Usuários</h2>
            <p>Total de usuários: <strong>2</strong></p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;