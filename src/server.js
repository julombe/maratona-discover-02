const express = require("express")
const server = express()
const routes = require("./routes")


//configuring template engine
server.set('view engine', 'ejs')

// enable css. Static files
server.use(express.static('public'))


//routes
server.use(routes)




// start server
server.listen(3000, () => console.log('server is running'))