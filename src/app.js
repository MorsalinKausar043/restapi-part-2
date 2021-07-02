const express = require('express') ;
require("./mongoose/mongoose");
const StudentList = require("./db/db");
const app = express() ;
const port = process.env.PORT || 8000 ;

app.use(express.json())

// app.get("/" , (req,res) =>{
//     res.status(201).send("hello world")
// })

app.post("/students" , async (req,res) =>{
    
    const users = new StudentList(req.body) ;
    const result = await users.save() ;
    res.status(201).send(result) ;
    console.log(result);
})

app.get("/students" , async (req,res) =>{
    
    const user2 =await StudentList.find();
    res.status(201).json(user2)

})



app.listen(port , () =>{
    console.log(`express server is ${port}`);
})
