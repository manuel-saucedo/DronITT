const express = require("express");
const router = express.Router()
const controller = require('../controllers/user')
const path = "user"


/*
ruta user get.
*/

router.get(
    `/${path}`,
    controller.getData
)

/*
ruta user post
*/

router.post(
    `/${path}`,
    controller.postData
)

module.exports = router