const express = require("express")
const app = express()
app.listen(8080,()=>console.log("Server is running"))
app.get("/",(req,res)=>{
    const query = req.query
    console.log(query.name)
  res.send("success")
})