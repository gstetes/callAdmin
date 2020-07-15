import React from 'react';
import './styles.css';

import Header from '../../components/Header';

const History = () => {
  return (
    <>
      <Header />
      <div className="call-container">
        <h2>Data: <input type="text" placeholder="Digite a data (DD/M/AAAA)" /> </h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hora</th>
              <th>Funcionário</th>
              <th>Detalhe</th>
              <th>Urgência</th>
              <th>Concluido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>SIM</td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>NÃO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
};

export default History;