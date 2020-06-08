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


router.get("/", (req, res, next)=>{
    res.render("seven/view_courses", {
        title: "course",
        coursesList: courses
    })
    
})
router.get("/", (req, res, next)=>{
    res.render("seven/view_courses", {
        title: "course",
        courseList: courses
    })
    
})
router.get("/", (req, res, next)=>{
    res.render("seven/view_courses", {
        title: "course",
        courseList: courses
    })
    
});

router.post("/", (req, res, next)=>{
    res.render("seven/view_courses", {
        title: "view Courses",
        courseList: courses
       
    });
    
});


router.post("/", (req,res)=>{
    var courseInfo = req.body;  
    patients.push(courseInfo);
    res.json(courses);
});
module.exports = router;