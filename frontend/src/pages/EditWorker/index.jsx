import React from 'react';
import './styles.css';

import Header from '../../components/Header';

const EditWorker = () => {
  return (
    <>
      <Header />
      <div className="editworker-container">
        <div className="editworker-content">
          <h2>Insira as novas informações do funcionário</h2>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Ramal" />
            <input type="text" placeholder="Setor" />
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditWorker;