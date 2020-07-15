import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { FaPen, FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';

const Workers = () => {
  return (
    <>
      <Header />
      <div className="worker-container">
        <div className="btns">
          <Link id="addWorker" to="/workers/add">Novo Funcionário</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ramal</th>
              <th>Nome</th>
              <th>Setor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2049</td>
              <td>Guilherme Stetes</td>
              <td>TI/CPD</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2049</td>
              <td>Guilherme Stetes</td>
              <td>TI/CPD</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2049</td>
              <td>Guilherme Stetes</td>
              <td>TI/CPD</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2049</td>
              <td>Guilherme Stetes</td>
              <td>TI/CPD</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2049</td>
              <td>Guilherme Stetes</td>
              <td>TI/CPD</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2049</td>
              <td>Guilherme Stetes</td>
              <td>TI/CPD</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2049</td>
              <td>Guilherme Stetes</td>
              <td>TI/CPD</td>
              <td>
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

export default Workers;