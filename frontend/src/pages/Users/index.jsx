import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { FaPen, FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';

const Users = () => {
  return (
    <>
      <Header />
      <div className="user-container">
        <div className="btns">
          <Link id="addUser" to="/users/add">Novo Usuário</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Guilherme Stetes</td>
              <td>gstetes@gmail.com</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Guilherme Stetes</td>
              <td>gstetes@gmail.com</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Guilherme Stetes</td>
              <td>gstetes@gmail.com</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Guilherme Stetes</td>
              <td>gstetes@gmail.com</td>
              <td>
                <FaPen size="15" color="FF0" />
                <FaTrashAlt size="15" color="F00" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;