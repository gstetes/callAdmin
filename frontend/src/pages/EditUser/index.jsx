import React from 'react';
import './styles.css';

import Header from '../../components/Header';

const EditUser = () => {
  return (
    <>
      <Header />
      <div className="edituser-container">
        <div className="edituser-content">
          <h2>Insira as novas informações do usuário</h2>
          <form>
            <input type="number" disabled value="1" />
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;