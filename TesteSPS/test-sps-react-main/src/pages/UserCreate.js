import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

function UserCreate() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        type: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await UserService.create(user);
            alert('Usuário criado com sucesso!');
            navigate('/users'); 
        } catch (error) {
            alert('Erro ao criar usuário: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Adicionar Novo Usuário</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Tipo:
                    <input
                        type="text"
                        name="type"
                        value={user.type}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Senha:
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Criar Usuário</button>
            </form>
            <li><Link to="/">Início</Link></li>
        </div>
    );
}

export default UserCreate;
