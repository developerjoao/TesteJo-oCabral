import React from "react";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div>
      <h1>SPS REACT TEST</h1>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/users">Listar Usuários</Link></li>
          <li><Link to="/users/add">Adicionar Usuário</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
