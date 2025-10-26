const mongoose = require("mongoose");

function connectdb(){
    mongoose.connect(process.env.Mongoosedb_url)
    .then(()=>{
        console.log("connect to Mongodb");
        
    })
    .catch((err)=>{
        console.log("Error connecting to Mongodb:",err);
        

    })
}


module.exports = connectdb