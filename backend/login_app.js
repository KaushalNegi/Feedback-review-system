const exp=require("express");
const path=require("path");
const fs=require("fs");
const mongoose=require("mongoose");
mongoose.set("strictQuery",true);
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1/SE_project");
    start();
}
function start(){
    const Sign_model=mongoose.model("signin",mongoose.Schema({name:String,Sap_Id:Number,pass:String}),"signin");
    const Feedback_model=mongoose.model("feedback",mongoose.Schema({name:String,Sap_Id:Number,tname:String,Sub_code:String,recommended:Number,comment:String}),"feedback");
    function feedbackDataInsertion(input){
        (new Feedback_model(input)).save();
        console.log("Data saved!");
    }
    const app=exp();
    app.use(exp.urlencoded());
    app.use(exp.static(path.join(__dirname,"../frontend/student_login")));
    app.use(exp.static(path.join(__dirname,"../frontend/image")));
    app.get("/",(req,res)=>{
        res.status(200).send(fs.readFileSync("frontend/student_login/student_login.html","utf-8"));
    });
    app.post("/feedback",async (req,res)=>{
        if(await Sign_model.find({id:req.body.id,pass:req.body.pass})==0){
            app.get("/popup",(req,res)=>{
                res.status(200).send(true);
            });
            res.status(200).send(fs.readFileSync("frontend/student_login/student_login.html","utf-8"));
        }
        else 
        res.status(200).send(fs.readFileSync("frontend/feedback/feedback.html","utf-8"));
    });
    app.post("/submitted",(req,res)=>{
        feedbackDataInsertion(req.body);
        res.status(200).send(fs.readFileSync("frontend/feedback/submitted.html","utf-8"));
    });
    app.listen(80,()=>console.log("Server started at localhost"));
}