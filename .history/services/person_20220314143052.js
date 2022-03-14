const PersonDAO = require("../dao/person");
class PersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    PersonDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
