const express = require("express");
const path = require('path');
const router = express.Router();
const studentManager = require("../model/Student");

var student1 = new studentManager.student(); 
student1.id = 1;
student1.name = "joyce";
student1.location = "douala";
student1.gender = 'female';
student1.age = 23;

var student2 = new studentManager.student(); 
student2.id = 1;
student2.name = "rene";
student2.location = "douala";
student2.gender = 'male';
student2.age = 23;


//list of patients
students = [
    student1, student2];

router.post("/", (req,res)=>{
    var studentInfo = req.body;  
    students.push(studentInfo);
    res.json(students);
});  
router.get("/",(req,res)=>{
    res.json(students);
})



router.get("/:id",(req,res)=>{
    var id = req.params.id;
    
    res.json(students[id-1]);
    
});

router.patch("/:id", (req,res)=>{

    var id = req.params.id-1;
    //get student
    var studentsToUpdate = students[id];
    //update information
    studentsToUpdate = req.body;
    //add updated student to array
    students[id] = studentsToUpdate;
    //send updated information
    res.send(students);
})

//add a new patient
router.post("/", (req,res)=>{
    var studentInfo = req.body;  
    students.push(studentInfo);
    res.json(students);
});

router.patch("/", (req,res)=>{
    res.send("updating student")
});

router.delete("/",(req,res)=>{
    res.send("deleting student");
});

module.exports = router;