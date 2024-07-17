import React, { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import { Link } from "react-router-dom"; 

function UserEdit() {
  const { userId } = useParams();
  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    UserService.update(userId, user).then(() => {
      alert('Usuário atualizado com sucesso!');
      navigate('/users');
    }).catch(err => alert('Erro ao atualizar usuário: ' + err.message));
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    UserService.delete(userId, user).then(() => {
      alert('Usuário deletado com sucesso!');
      navigate('/users');
    }).catch(err => alert('Erro ao deletar usuário: ' + err.message));
  };

  return (
    <div>
      <h1>Editar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
        <br />
        <button type="submit">Salvar</button>
      </form>
      <form onSubmit={handleDelete}>
        <button type="submit">Deletar usuário</button>
      </form>
      <li><Link to="/">Início</Link></li>
    </div>
  );
}

export default UserEdit;
