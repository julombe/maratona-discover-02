const express = require("express")
const server = express()


server.use(express.static('public'))
//request, response
server.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})




// start server
server.listen(3000, () => console.log('server is running'))