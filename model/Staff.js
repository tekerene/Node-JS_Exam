exports.staff = class Staff{
    constructor(id, name, title, ){
        this.id = id;
        this.name = name;
        this.title = title;
       
    }


    getPatientDetails(){
        console.log(JSON.stringify(this));
    }
}
