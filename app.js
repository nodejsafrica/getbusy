var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {
    res.status(200).send({
            name: "charles onuorah",
            username: "charlesinto",
            email: "charles.onuorah@yahoo.com",
            address: {
                street: "Lekki",
                suite: "Apt. 556",
                city: "Lagos",
                zipcode: "92998-3874",
                geo: {
                lat: "-37.3159",
                lng: "81.1496"
                }
            }
    })
})

var port = process.env.PORT | 3000

var server = http.createServer(app)

server.listen(port,() => {
    console.log(`server is listening on port ${port}`)
})

