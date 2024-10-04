import express from "express";

const app = express();

app.use("/test",(req,res)=>{
    res.send("testing");
})
app.use("/hello",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log('started: http://localhost:3000');
});