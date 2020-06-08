const path = require("path");
const express = require("express");

const exphbs = require('express-handlebars');
const studentApi = require('./routes/studentApi');
const  hashPassword = require('./util/crytoHash');
const studentRouter = require("./routes/student");
const staffRouter = require('./routes/staff');
const staffApi = require('./routes/staffApi');
const courseApi = require('./routes/courseApi');
const studentApi = require('./routes/studentApi');
const courseRouter = require('./routes/course'); 

const PORT = 4000;
var app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

 
//routing middleware 

app.use("/api/student", studentApi);
app.use("/student", studentRouter);
app.use("/staff", staffRouter);
app.use("/course", courseRouter);
app.use("/api/course", courseApi);
app.use("/api/staff", staffApi);


app.engine('hbs', exphbs({extname: 'hbs',
    defaultLayout: 'main'
}));
app.set("view engine", "hbs");

app.get('/', (req, res) =>{
    res.render('home');
});
app.get("/register", (req, res)=>{
    res.render("register")
});

const users = [ {
    firstName: 'john',
        lastName: 'doe',
        email: 'johndoe@gmail.com',
        password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=',
}
];
app.post('/register', (req, res)=>{
    const {firstName, lastName, email ,password, confirmPassword } = req.body;
    //check if the password and confirm password field match
    
    if (password === confirmPassword){
        //check if users with the same email is also registered
        if( users.find(user => user.email === email)){
          res.render("register", {
              message: 'User already existed',
              messageClass: 'alert-danger'
          });  
          return;
        }
    
    
    const hashPass = hashPassword.getHashPassword(password);
    //store user into the database if you are using one
    console.log(password);
    users.push({
        firstName, lastName, email, password: hashPass    
    });

   
    res.render('login', {
        message: 'Registration Complete. Please login to continue.',
        messageClass: 'alert-success'
    });
} else {
    res.render('register', {
        message: 'Password does not match',
        messageClass: 'alert-danger'
    });
}
});
app.get("/login", (req, res)=>{
    res.render("login")
});
app.post('/login', (req, res)=>{
    const { email, password } = req.body;
    const hashPass = hashPassword.getHashPassword(password);
    console.log(hashPass);
    const user = users.find(u => {
        return u.email === email && hashPass === u.password
    });
    if(user){

    } else {
        res.render('login', {
            message: 'Invalid username or password',
            messageClass: 'alert-dander'
        });
    
    }
});


app.listen(PORT, ()=>{
    console.log(`listening on http://127.0.0.1:${PORT}`)
})



