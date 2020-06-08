var fs = require('fs');
var buf = new Buffer(10024);

console.log("Opening an existing file");
fs.open('write.txt', 'r+', (err, fd)=> {
    if(err) {
        return console.error(err);
    }
    console.log("file opened successfully!");
    console.log("Reading the files");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if(err){
            console.log(err);
        }
        console.log(`${bytes} bytes read`);
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });
    //to rename a file 
   var rename = fs.appendFileSync('write.txt', "my name is rene");
   console.log(rename);
});