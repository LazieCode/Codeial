const express = require('express');
const usersController = require("../controllers/users_controller"); //acquired the home controller
const router = express.Router();

router.get('/profile', usersController.profile);

module.exports = router;