const express = require("express")
const server = express()

//request, response
server.get('/', (request, response) => {
    return response.send('OLÁ!!!')
})




// start server
server.listen(3000, () => console.log('server is running'))