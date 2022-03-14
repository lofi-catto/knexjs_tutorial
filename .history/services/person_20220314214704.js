const PersonDAO = require("../dao/person");
const ApiError = require("../error/ApiError");
class PersonService {
  createPerson(personDto, next) {
    const { firstName, lastName, email } = personDto;
    if (!firstName) {
      return next(
        ApiError.badRequest("firstName field is required and must be non blank")
      );
    }
    return PersonDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
