const express = require('express');
const router = express.Router();
const {checkAuthentication} =require("../controller/google.controller")
router.route('/check').get(checkAuthentication);
module.exports = router;