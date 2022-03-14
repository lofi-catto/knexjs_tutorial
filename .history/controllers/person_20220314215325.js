const personService = require("../services/person");
const ApiError = require("../error/ApiError");

class PersonController {
  async createPerson(req, res, next) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.error(error);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new PersonController();
