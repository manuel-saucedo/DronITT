const express = require("express");
const router = express.Router()
const controller = require('../controllers/plants')
const path = "plant"


/*
ruta plant get.
*/

router.get(
    `/${path}`,
    controller.getData
)

/*
ruta plant post.
*/

router.post(
    `/${path}`,
    controller.postData
)

/*
ruta plant patch
*/
/*
router.patch(
`/${path}`,
controller.patchData
)*/

module.exports = router