var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();

var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  const { id, name, sal } = req.body;

  connection.query(
    "UPDATE employees SET name = ?, sal = ? WHERE id = ?",
    [name, sal, id],
    (err, result) => {
      if (err) {
        res.send({ update: "fail" });
      } else {
        res.send({ update: "success" });
      }
    }
  );
});

module.exports = router;
