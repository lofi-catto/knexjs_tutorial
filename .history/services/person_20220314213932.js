const PersonDAO = require("../dao/person");
const ApiError = require("../error/ApiError");
class PersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    if (!firstName) {
      next(ApiError.badRequest("msg field is required and must be non blank"));
      return;
    }
    return PersonDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
