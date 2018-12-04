const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "empleado"
});

connection.connect();


app.put('/rest/empleado', function (req, res) {
   connection.query('UPDATE `empleados` SET `nombre`=?  where `id_empleados`=?', [req.body.name,req.body.id_empleados], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
});


app.listen(3000, function () {
 console.log('Node app is running on port 3000');

});