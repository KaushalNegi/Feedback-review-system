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
    const Sign_schema=mongoose.Schema({
        name: String,
        id: Number,
        pass: String
    });
    const Feedback_schema=mongoose.Schema({
        name:String,
        Sap_Id:Number,
        tname:String,
        Sub_code:String,
        recommended:Number,
        comment:String
    });
    const Sign_model=mongoose.model("signin",Sign_schema,"signin");
    const Feedback_model=mongoose.model("feedback",Feedback_schema,"feedback");
    function signDataInsertion(input){
        (new Sign_model(input)).save();
        console.log("user credential saved!");
    }
    function feedbackDataInsertion(input){
        (new Feedback_model(input)).save();
        console.log("user feedback saved!");
    }
    const app=exp();
    app.use(exp.urlencoded());
    app.use(exp.static(path.join(__dirname,"../frontend/student_signin")));
    app.use(exp.static(path.join(__dirname,"../frontend/image")));
    app.get("/",(req,res)=>{
        res.status(200).send(fs.readFileSync("frontend/student_signin/student_signin.html","utf-8"));
    });
    app.post("/feedback",(req,res)=>{
        req.body.pass=req.body.pass[0];
        signDataInsertion(req.body);
        res.status(200).send(fs.readFileSync("frontend/feedback/feedback.html","utf-8"));
    });
    app.post("/submitted",(req,res)=>{
        feedbackDataInsertion(req.body);
        res.status(200).send(fs.readFileSync("frontend/feedback/submitted.html","utf-8"));
    });
    app.listen(80,()=>console.log("Server started at localhost"));
}