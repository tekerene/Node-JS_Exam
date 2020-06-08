const express = require("express");
const path = require('path');
const router = express.Router();
const courseManager = require("../model/Course");

var course1 = new courseManager.course(); 
course1.id = 1;
course1.description = "introduction to databases";
course1.title = "database";

var course2 = new courseManager.course(); 
course2.id = 2;
course2.description = "introduction to firebase";
course2.title = "firebase";




//list of patients
courses = [
    course1, course2];

router.post("/", (req,res)=>{
    var courseInfo = req.body;  
    courses.push(courseInfo);
    res.json(courses);
});  
router.get("/",(req,res)=>{
    res.json(courses);
})



router.get("/:id",(req,res)=>{
    var id = req.params.id;
    
    res.json(courses[id-1]);
    
});

router.patch("/:id", (req,res)=>{

    var id = req.params.id-1;
    //get student
    var courseToUpdate = courses[id];
    //update information
    courseToUpdate = req.body;
    //add updated student to array
    coursess[id] = coursesToUpdate;
    //send updated information
    res.send(courses);
})

//add a new patient
router.post("/", (req,res)=>{
    var courseInfo = req.body;  
    courses.push(courseInfo);
    res.json(courses);
});

router.patch("/", (req,res)=>{
    res.send("updating courses")
});

router.delete("/",(req,res)=>{
    res.send("deleting courses");
});

module.exports = router;