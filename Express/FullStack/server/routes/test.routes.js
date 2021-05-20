const TestController = require("../controllers/test.controller");

module.exports = app => {
  app.get("/api/tests/", TestController.findAllTests);
  app.get("/api/tests/:id", TestController.findOneSingleTest);
  app.put("/api/tests/update/:id", TestController.updateExistingTest);
  app.post("/api/tests/new", TestController.createNewTest);
  app.delete("/api/tests/delete/:id", TestController.deleteAnExistingTest);
  app.delete("/api/tests/deleteAll", TestController.deleteAllExistingTest);
};