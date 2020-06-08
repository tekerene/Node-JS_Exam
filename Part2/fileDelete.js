const fs = require('fs');

console.log("Going to delete an existing file");
fs.unlink('example.txt', function(err){
    if(err) {
        return console.error(err);
    
    }
    console.log("File deleted succesffully")
});