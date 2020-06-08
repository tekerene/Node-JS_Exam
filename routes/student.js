const express = require("express");
const path = require('path');
const router = express.Router();
const studentManager = require("../model/Student");
const { EOL } = require("os");

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


router.get("/", (req, res, next)=>{
    res.render("seven/view_student", {
        title: "student",
        studentsList: students
    })
    
})

router.post('/add', (req, res, next) => {
    const form = formidable({ multiples: true });
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      //gets medication information from form
      var student_name = fields.student_name;
  
      //save to database
      student_db = getDatabasepath("student");
      fs.appendFile(student_db, student_name + EOL, function(error){
        if(error) throw error;
      })
  
      //render student added view
      res.render("student_view", {
        new_student_added: true,
        added_student: student_name,
  
      });
    });
  });
  
  router.get("/add", (req, res) => {
    res.render("student/add", {
      new_medication_added: false
    })
  })

router.post("/", (req,res)=>{
    var studentInfo = req.body;  
    patients.push(studentInfo);
    res.json(students);
});
module.exports = router;