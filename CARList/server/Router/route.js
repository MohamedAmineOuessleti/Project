const express = require('express');
const router = express.Router()
const {getHandler,postHandler,updateHandler,deleteHandler} =require('../controller/controller')

router.get("/",getHandler)
router.post("/",postHandler)
router.put("/:id",updateHandler)
router.delete("/:id",deleteHandler)

module.exports=router