import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { FaCheckCircle, FaPen, FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';

const Calls = () => {
  return (
    <>
      <Header />
      <div className="call-container">
        <div className="btns">
          <Link id="addCall" to="/calls/add">Novo Chamado</Link>
          <Link id="hist" to="history">Histórico</Link>
        </div>
        <h2>Data: 14/7/2020</h2>
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
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>16:54</td>
              <td>Guilherme</td>
              <td>Problema de conexão daoshdoashodashoidhasiodhasodihasidhsaoidhoasidhioasdhiasohdioashdoisah</td>
              <td>4</td>
              <td>
                <FaCheckCircle size="15" color="0F0" />
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
};

export default Calls;