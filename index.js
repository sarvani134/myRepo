const express=require("express")
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(3003,()=>{
    console.log("listening to port 3003")
})
app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(` welcome ${user} to our website`)
})
app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(` welcome ${user} to our website`)
})