const deanService = require('../services/deanService');

class DeanController {
  async login(req, res, next) {
    const { universityId, password } = req.body;

    try {
      const dean = await deanService.login(universityId, password);
      const token = authService.generateToken(dean.id);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  async getPendingSessions(req, res, next) {
    const deanId = req.user.userId;

    try {
      const sessions = await deanService.getPendingSessions(deanId);
      res.json({ sessions });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DeanController();
