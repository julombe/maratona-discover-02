const express = require("express")
const routes = express.Router()

const basePath = __dirname + "/views"

//request, response. adding routes
routes.get('/', (request, response) => response.sendFile(basePath + "/index.html"))
routes.get('/', (request, response) => response.sendFile(basePath + "/job.html"))
routes.get('/', (request, response) => response.sendFile(basePath + "/job-edit.html"))
routes.get('/', (request, response) => response.sendFile(basePath + "/profile.html"))
    


module.exports = routes;