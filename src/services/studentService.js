const studentModel = require('../models/Student');

class StudentService {
  async login(university_id, password) {
    const Student = await studentModel();
    console.log('Student=', Student);
    const student = await Student.findOne({ where: { university_id } });
    console.log('student==', student);
    if (!student || student.password !== password) {
      throw new Error('Invalid credentials');
    }
    return student;
  }

  async getAvailableSessions() {
    // Retrieve available sessions with the dean
  }

  async bookSession(sessionId, studentId) {
    // Book a session with the dean
  }
}

module.exports = new StudentService();
