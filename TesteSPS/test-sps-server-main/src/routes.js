const express = require('express');
const userRepository = require('./userRepository');
const { authenticate, generateToken } = require('./authMiddleware');

const router = express.Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = userRepository.findByEmail(email);
    if (user && user.password === password) {
        const token = generateToken(user);
        res.send({ user, token });
    } else {
        res.status(400).send({ error: 'Invalid login credentials' });
    }
});

router.get('/users/', authenticate, (req, res) => {
    res.send(userRepository.findAll());
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = userRepository.findById(id);
  if (user) {
      res.json(user);
  } else {
      res.status(404).send({ error: 'User not found' });
  }
});

router.post('/users', authenticate, (req, res) => {
    const { email, name, type, password } = req.body;
    if (userRepository.findByEmail(email)) {
        return res.status(400).send({ error: 'Email already exists' });
    }
    const user = userRepository.create({ email, name, type, password });
    res.status(201).send(user);
});

router.put('/users/:id', authenticate, (req, res) => {
    const user = userRepository.update(parseInt(req.params.id, 10), req.body);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: 'User not found' });
    }
});

router.delete('/users/:id', authenticate, (req, res) => {
    const user = userRepository.remove(parseInt(req.params.id, 10));
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: 'User not found' });
    }
});

module.exports = router;
