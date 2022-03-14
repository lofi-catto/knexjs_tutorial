const express = require("express");
const personController = require("../controllers/person");

const router = express.Router();
router.post("/person", personController.createPerson);

module.exports = router;
