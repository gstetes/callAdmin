import React from 'react';
import './styles.css';

import Header from '../../components/Header';

const EditCall = () => {
  return (
    <>
      <Header />
      <div className="addcall-container">
        <div className="addcall-content">
          <h2>Insira as novas informações do chamado</h2>
          <form>
            <select>
              <option value={null}>Selecione o funcionário</option>
              <option value="1">Guilherme Stetes</option>
              <option value="1">Guilherme Stetes</option>
              <option value="1">Guilherme Stetes</option>
              <option value="1">Guilherme Stetes</option>
            </select>
            <textarea placeholder="Detalhe"></textarea>
            <select>
              <option value={null}>Urgência</option>
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