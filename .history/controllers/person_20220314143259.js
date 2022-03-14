const personService = require("../services/person");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.error(err);
    }
  }
}

module.exports = new PersonController();
