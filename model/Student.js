exports.student = class Student{
    constructor(id, name, location, gender, age ){
        this.id = id;
        this.name = name;
        this.location = location;
        this.gender = gender;
        this.age = age;

       
    }


    getPatientDetails(){
        console.log(JSON.stringify(this));
    }
}
