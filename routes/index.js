var express = require('express');
var router = express.Router();
const userController = require("../controller/userController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("This is the homepage")
});


// hng requirements
router.post("/api", userController.Createuser);
router.get("/api",userController.getUser);
router.put("/api",userController.updateUser);
router.delete("/api",userController.deleteUser);

module.exports = router;
