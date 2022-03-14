const personService = require("../services/person");
const ApiError = require("../error/ApiError");

class PersonController {
  async createPerson(req, res, next) {
    try {
      const { firstName, lastName, email } = req.body;
      if (!firstName || !lastName || !email) {
        next(
          ApiError.badRequest("msg field is required and must be non blank")
        );
        return;
      }

      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.error(error);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new PersonController();
