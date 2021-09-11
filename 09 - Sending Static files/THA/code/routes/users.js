var express = require("express");
var router = express.Router();
const path = require("path");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Enter query /query/<your query> (nature,bird,people) in the URL");
});

router.get("/query/:search", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../", "public/images", req.params.search + ".jpeg")
  );
});

module.exports = router;
