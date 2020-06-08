const express = require("express");
const path = require('path');
const router = express.Router();
const staffManager = require("../model/Staff");

var staff1 = new staffManager.staff(); 
staff1.id = 1;
staff1.name = "sir man";
staff1.title = "instructor";

var staff2 = new staffManager.staff(); 
staff2.id = 2;
staff2.name = "sir man3";
staff2.title = "instructor2";



//list of patients
staffs = [
    staff1, staff2];


router.get("/", (req, res, next)=>{
    res.render("seven/view_staff", {
        title: "staff",
        staffsList: staffs
    })
    
})
router.post("/", (req, res, next)=>{
    res.render("seven/view_staff", {
        title: "view Staff",
        staffsList: staffs
       
    });
    
});


router.post("/", (req,res)=>{
    var staffInfo = req.body;  
    patients.push(staffInfo);
    res.json(staffs);
});
module.exports = router;