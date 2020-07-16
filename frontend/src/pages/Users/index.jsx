import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import { FaPen, FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';

const Users = () => {
  const token = localStorage.getItem('user_token');

  const [users, setUsers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [history, token]);

  useEffect(() => {
    api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [token, users]);

  const handleNavigateToEdit = (id) => {
    localStorage.setItem('userId', id);
    history.push(`/users/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

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
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <FaPen size="15" color="FF0" onClick={() => { handleNavigateToEdit(user.id) }} />
                  <FaTrashAlt size="15" color="F00" onClick={() => { handleDelete(user.id) }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;