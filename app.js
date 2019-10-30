const express = require("express");
const port = process.env.PORT || 8000;
/*const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    info: {
        title: "SLICE - Set of Learning and Immutable Chess Engines",
        version: "1.0.0",
        host: "https://slice-chess.herokuapp.com/",
        "base-path": "/",
        openapi: "3.0.0"
   },
  },
  apis: ['app.js', 'endpoints/*.js'],
};
const specs = swaggerJsdoc(options);*/
const cors = require("cors");

var app = express();
app.use(cors());

app.get('/', function(req, res) {
    res.send(JSON.stringify({hello: "World"}));
});

app.listen(port, function () {
 console.log(`app listening on port 8000!`);
});


