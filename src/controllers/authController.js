class AuthController {
  async login(req, res, next) {
    const { universityId, password } = req.body;

    try {
      const student = await Student.findOne({ universityId, password });
      if (!student) {
        throw new Error('Invalid credentials');
      }

      const token = authService.generateToken(student.id);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
