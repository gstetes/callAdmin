import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
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
        <Link to="/login"><FaSignOutAlt size="35" color="F00" /></Link>
      </div>
    </div>
  );
};

export default Header;