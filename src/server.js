const express = require("express")
const server = express()

console.log(server)

server.listen(3000, () => console.log('server is running'))