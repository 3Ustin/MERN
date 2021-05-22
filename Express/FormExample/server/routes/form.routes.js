const FormController = require("../controllers/form.controller");

module.exports = app => {
  app.get("/api/forms/", FormController.findAllForms);
  app.get("/api/forms/:id", FormController.findOneSingleForm);
  app.put("/api/forms/update/:id", FormController.updateExistingForm);
  app.post("/api/forms/new", FormController.createNewForm);
  app.delete("/api/forms/delete/:id", FormController.deleteAnExistingForm);
  app.delete("/api/forms/deleteAll", FormController.deleteAllExistingForm);
};