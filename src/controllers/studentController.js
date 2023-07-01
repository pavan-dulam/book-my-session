const studentService = require('../services/studentService');
const authService = require('../services/authService');

class StudentController {
  async login(req, res, next) {
    const { universityId, password } = req.body;

    try {
      const student = await studentService.login(universityId, password);
      const token = authService.generateToken(student.id);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  async getAvailableSessions(req, res, next) {
    try {
      const sessions = await studentService.getAvailableSessions();
      res.json({ sessions });
    } catch (error) {
      next(error);
    }
  }

  async bookSession(req, res, next) {
    const { session_id } = req.body;
    const studentId = req.user.userId;

    try {
      await studentService.bookSession(session_id, studentId);
      res.json({ message: 'Session booked successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new StudentController();
