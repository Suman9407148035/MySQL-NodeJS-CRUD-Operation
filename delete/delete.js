var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();

var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  const { id } = req.body;

  connection.query(
    "DELETE FROM employees WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        res.send({ delete: "fail" });
      } else {
        res.send({ delete: "success" });
      }
    }
  );
});

module.exports = router;
