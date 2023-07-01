const sessionModel = require('../models/Session');
class SessionController {
  async getAvailableSessions(req, res, next) {
    try {
      const Session = await sessionModel();
      const sessions = await Session.findAll({ available: true });
      res.json({ sessions });
    } catch (error) {
      next(error);
    }
  }

  async bookSession(req, res, next) {
    const { sessionId } = req.body;
    const studentId = req.user.userId;

    try {
      const session = await Session.findById(sessionId);
      if (!session) {
        throw new Error('Session not found');
      }
      if (!session.available) {
        throw new Error('Session already booked');
      }

      session.studentId = studentId;
      session.available = false;
      await session.save();

      res.json({ message: 'Session booked successfully' });
    } catch (error) {
      next(error);
    }
  }

  async updateSessionStartTime(req, res) {
    const { sessionId, newStartTime } = req.body;

    try {
      // Find the session by ID
      const session = await Session.findByPk(sessionId);

      if (!session) {
        return res.status(404).json({ message: 'Session not found' });
      }

      // Update the start time of the session
      session.startTime = newStartTime;

      // Save the updated session
      await session.save();

      return res
        .status(200)
        .json({ message: 'Session start time updated successfully' });
    } catch (error) {
      console.error('Error updating session start time:', error);
      return res
        .status(500)
        .json({ message: 'Failed to update session start time' });
    }
  }
}

module.exports = new SessionController();
