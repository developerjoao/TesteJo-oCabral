let users = [{ id: 1, name: "admin", email: "admin@spsgroup.com.br", type: "admin", password: "1234" }];

const findAll = () => users;

const findByEmail = (email) => users.find(user => user.email === email);

const findById = (id) => users.find(user => user.id === id);

const create = (user) => {
    user.id = users.length + 1;
    users.push(user);
    return user;
};

const update = (id, newData) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...newData };
        return users[index];
    }
};

const remove = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

module.exports = {
    findAll,
    findByEmail,
    findById,
    create,
    update,
    remove
};
