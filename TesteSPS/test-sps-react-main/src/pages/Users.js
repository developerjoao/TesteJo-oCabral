import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    UserService.list()
      .then(setUsers)
      .catch(error => {
        console.error('Erro ao carregar usuários:', error);
        setError('Erro ao carregar usuários: ' + (error.response?.data?.error || error.message));
      });
  }, []);

  return (
    <div>
        <h1>Usuários</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} ({user.email})
                    <Link to={`/users/${user.id}/edit`}>
                        <button>Editar</button>
                    </Link>
                </li>
            ))}
        </ul>
        <li><Link to="/">Início</Link></li>
    </div>
    
    
);
}

export default Users;
