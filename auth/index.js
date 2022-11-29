import jwt from 'jsonwebtoken';
import config from '../config.js';

function sign (data) {
    return jwt.sign(data, config.jwt.secret);
}

function verify (token) {
    return jwt.verify(token, config.jwt.secret);
}

const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req);
        // Comprobar si es o no propio
        if (decoded.id !== owner) {
            throw new Error('No tienes permiso para hacer esto');
        }
    }
}

function getToken (authorization) {
    if (!authorization) {
        throw new Error('No viene token', 401);
    }

    if (authorization.indexOf('Bearer ') === -1) {
        throw new Error('Formato inválido', 401);
    }

    let token = authorization.replace('Bearer ', '');
    return token;
}

function decodeHeader (req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    return decoded;
}

export default {
    sign,
    verify,
    check
}