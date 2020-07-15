import React from 'react';
import './styles.css';

import Header from '../../components/Header';

const AddWorker = () => {
  return (
    <>
      <Header />
      <div className="adduser-container">
        <div className="adduser-content">
          <h2>Insira as informações do usuário</h2>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWorker;