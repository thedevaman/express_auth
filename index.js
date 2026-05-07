const express = require("express")
const fs = require("fs")
const path = require("path")
const root = __dirname
const app = express()



app.listen(8080,()=>console.log("Server is running"))
app.use(express.json())

app.post("/signup",(req,res)=>{
  const data = req.body
  const location = path.join(root,"files", "users.json")
  const users = JSON.parse(fs.readFileSync(location,"utf-8"))
  const isExist = users.some((user)=>user.email == data.email)
  if(!isExist)
  {
  users.push(data)
  // console.log(users)
  const content = JSON.stringify(users,null,2)
  fs.writeFileSync(location, content)
  res.send("Sign up Success!")
  }else{
    res.send("User Already exist!")
  }

})

app.post("/login",(req,res)=>{
    const data = req.body
    const location = path.join(root,"files", "users.json")
    const users = JSON.parse(fs.readFileSync(location,"utf-8"))
    const user = users.find((user)=>user.email === data.email)
    if(user)
    {
     if(user.password === data.password)
     {
      res.status(200).send("Login success!")
     }else{
      res.status(401).send("Incorrect Password!")
     }
    }else{
      res.status(404).send("User not found !")
    }
   
})