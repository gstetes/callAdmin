import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import './styles.css';

import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const username = localStorage.getItem('user_name');

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div className="header-container">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/calls">Chamados</Link>
        </li>
        <li>
          <Link to="/workers">Funcionários</Link>
        </li>
        <li>
          <Link to="/users">Usuários</Link>
        </li>
      </ul>
      <div className="opt">
        <p>Bem vindo, {username}!</p>
        <FaSignOutAlt size="35" color="F00" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Header;