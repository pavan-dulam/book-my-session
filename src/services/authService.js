const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key' || process.env.SECRET_KEY;

class AuthService {
  generateToken(userId) {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '24h' });
  }

  validateToken(token) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  parseToken(req) {
    const token = req.headers.authorization.split(' ')[1];
    return this.validateToken(token);
  }
}

module.exports = new AuthService();
