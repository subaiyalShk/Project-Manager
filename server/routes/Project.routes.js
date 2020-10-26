const ProjectController = require("../controllers/Project.controller");
const {authenticate} = require('../config/jwt.config');


module.exports = function(app){
    app.get("/api/projects",  ProjectController.list);
    app.post("/api/project", ProjectController.create);
    app.get("/api/project/:id", ProjectController.detail);
    app.put("/api/project/:id", ProjectController.update);
    app.delete("/api/project/:id", ProjectController.delete);
}
