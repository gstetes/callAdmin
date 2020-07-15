import React from 'react';
import './styles.css';

import Header from '../../components/Header';

const AddWorker = () => {
  return (
    <>
      <Header />
      <div className="addworker-container">
        <div className="addworker-content">
          <h2>Insira as informações do funcionário</h2>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Ramal" />
            <input type="text" placeholder="Setor" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWorker;