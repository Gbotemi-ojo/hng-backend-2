var express = require('express');
var router = express.Router();
const userController = require("../controller/userController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("This is the homepage")
});


// hng requirements
router.post("/api", userController.Createuser);
router.get("/api/:user_id",userController.getUser);
router.put("/api/:user_id",userController.updateUser);
router.delete("/api/:user_id",userController.deleteUser);

module.exports = router;
