const Dean = require('../models/Dean');

class DeanService {
  async login(universityId, password) {
    const dean = await Dean.findOne({ where: { universityId } });
    if (!dean || dean.password !== password) {
      throw new Error('Invalid credentials');
    }
    return dean;
  }

  async getPendingSessions(deanId) {
    // Retrieve pending sessions for the dean
  }
}

module.exports = new DeanService();
