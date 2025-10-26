require('dotenv').config()
const app = require("./src/app")
const moo = require("./src/db/db")
moo()

app.listen(3000,()=>{
    console.log("server is running on 3000");
    
})