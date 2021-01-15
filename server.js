const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

users = [];
connections = [];

server.listen(process.env.PORT || 5000);
console.log('Server running...')

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
    res.json('hello')
    
});

