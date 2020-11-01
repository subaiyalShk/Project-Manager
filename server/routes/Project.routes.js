const ProjectController = require("../controllers/Project.controller");
const {authenticate} = require('../config/jwt.config');


module.exports = function(app){
    app.get("/api/projects",authenticate,  ProjectController.list);
    app.post("/api/project", ProjectController.create);
    app.get("/api/project/:id", ProjectController.detail);
    app.put("/api/project/:id",authenticate, ProjectController.update);
    app.delete("/api/project/:id",authenticate, ProjectController.delete);
}
