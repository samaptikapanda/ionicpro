const express=require("express");
const router=express.Router();


router.use("/computer",require("../api/computer"));


module.exports=router;