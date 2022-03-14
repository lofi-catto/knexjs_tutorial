const PersonDAO = require("../dao/person");

class PersonService {
  createPerson(personDto, next) {
    const { firstName, lastName, email } = personDto;
    return PersonDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
