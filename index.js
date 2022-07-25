const express=require("express")
const userRouterers = require("./routes/person")
const userRoute = require("./routes/user")
const connections= require("./storage/db")
const app=express()
const cors= require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"]
}))

app.use("/user", userRoute)
app.use("/profile",userRouterers)

const port = process.env.PORT || 8080

app.listen(port,async ()=>{
    await connections
   console.log("server started")
})