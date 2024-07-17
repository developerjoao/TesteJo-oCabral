const jwt = require('jsonwebtoken');
const userRepository = require('./userRepository');  

const secretKey = 'mySecretKey123!@#Secure';

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, type: user.type }, 
        secretKey, 
        { expiresIn: '1h' } 
    );
};

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ error: 'Please authenticate.' });
    }

    const token = authHeader.split(' ')[1]; 

    try {
        const decoded = jwt.verify(token, secretKey); 
        req.user = decoded; 
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = { authenticate, generateToken };
