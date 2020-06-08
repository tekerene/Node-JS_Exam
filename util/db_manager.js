const path = require("path");


exports.getDatabasepath = function getDatabasePath(databaseName){
    return path.join(__dirname , "../database/" , databaseName +".txt");
}