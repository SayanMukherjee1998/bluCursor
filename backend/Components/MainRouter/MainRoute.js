const express = require('express')
const FetchImgController = require('../Controllers/fetchImage')


const router = express.Router()

router.get("/ftchImg",FetchImgController)


module.exports = router