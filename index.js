const express = require("express")
const app = express()



app.listen(8080,()=>console.log("Server is running"))
app.use(express.json())
app.get("/",(req,res)=>{
    const query = req.query
    console.log(query.name)
  res.send("success")
})

app.post("/",(req,res)=>{
    const data = req.body
    console.log(data)
    res.send("success")
})