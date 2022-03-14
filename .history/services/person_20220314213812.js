const PersonDAO = require("../dao/person");
const ApiError = require("../error/ApiError");
class PersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    return PersonDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
