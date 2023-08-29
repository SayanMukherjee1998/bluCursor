const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mainRoute = require("./Components/MainRouter/MainRoute")


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));




app.use(mainRoute)


const port = process.env.PORT || 5050


app.listen(port,(err)=>{
    if(err) console.log(`Server not running....Because ${err}`);
    console.log(`Server is running on http://localhost:${port}`);
})



