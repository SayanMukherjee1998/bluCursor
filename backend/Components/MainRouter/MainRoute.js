const express = require('express')
const FetchImgController = require('../Controllers/fetchImage')


const router = express.Router()
/**Settling up the main Router for backend  */
router.get("/ftchImg",FetchImgController)


module.exports = router