const db = require("../db/db");

class PersonDAO {
  createPerson(firstName, lastName, email) {
    db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .return("id");
  }
}
