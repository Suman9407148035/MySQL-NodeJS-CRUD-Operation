var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();

var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  const { id, name, sal } = req.body;

  connection.query(
    "INSERT INTO employees (id, name, sal) VALUES (?, ?, ?)",
    [id, name, sal],
    (err, result) => {
      if (err) {
        res.send({ insert: "fail" });
      } else {
        res.send({ insert: "success" });
      }
    }
  );
});

module.exports = router;
