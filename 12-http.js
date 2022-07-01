const http = require('http')

const server = http.createServer(function(req, res){ // incoming requrest, response
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('About')
    }
    res.end('Test')
})

server.listen(5000)