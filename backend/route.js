const googleRoute = require("./app/routes/google.routes");


function setupRoutes(app){
    app.use("/api/google",googleRoute)

}

module.exports = setupRoutes;