const express =require("express");
const router  =express.Router();

router
    .get("/",(req,res)=>{
        res.send(`recibido desde ${req.baseUrl}`);
    })
    .get("/:workoutId",(req,res)=>{
        res.send(`Get desde ${req.params.workoutId}`);
    })
    .post("/:workoutId",(req,res)=>{
        res.send(`Create desde ${req.params.workoutId}`);
    })
    .patch("/:workoutId",(req,res)=>{
        res.send(`Update desde ${req.params.workoutId}`);
    })
    .delete("/:workoutId",(req,res)=>{
        res.send(`Delete desde ${req.params.workoutId}`);
    })
    ;



module.exports= router;