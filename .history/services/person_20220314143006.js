const PersonDAO = require("../dao/person");
class PersonService {
  createPerson(firstName, lastName, email) {
    PersonDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
