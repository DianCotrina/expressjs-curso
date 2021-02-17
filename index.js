/* const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server on port 3000');
}); */

const morgan = require('morgan');
const express = require("express");
const app = express();
/* 
function logger(req,res,next){
    console.log(`Rout received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}; */

app.use(express.json());
app.use(morgan('dev'));


/* app.all("/user", (req, res, next) => {
  console.log("Por aquí pasó");
  next();
}); */

app.get("/user", (req, res) => {
  res.json({
    username: "conde",
    lastname: "hernadez",
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("Post request received");
});

app.put("/about", (req, res) => {
  res.send("Update request received");
});

app.delete("/user/:userId", (req, res) => {
  res.send(`User ${req.params.userId} deleted`);
});

var portNumber = 3000;
app.listen(portNumber, () => {
  console.log("Server on http://localhost:" + portNumber + "/");
});
