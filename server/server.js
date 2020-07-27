//################# PART 1 ##################
const path = require("path");
const fs = require("fs");
const chirpArr = [{ chirp: "chirp 1" }, { chirp: "chirp 2" }, { chirp: "chirp 3" }, { chirp: "chirp 4" }, { chirp: "chirp 5" }];
let dataPath = path.join(__dirname, '../chirps.json');

 fs.writeFile(dataPath, JSON.stringify(chirpArr),  err =>{
        if(err) console.log(err);
    });
 fs.readFile(dataPath, (err, data) => {
      if(err) console.log(err);
      
     console.log(JSON.parse(data));
 });


