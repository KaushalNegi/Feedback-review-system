const exp = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1/SE_project");
    start();
}
function start() {
    const Feedback_model = mongoose.model("feedback", mongoose.Schema({ name: String, Sap_Id: Number, tname: String, Sub_code: String, recommended: Number, comment: String }), "feedback");
    const app = exp();
    app.use(exp.static(path.join(__dirname, "../frontend")));
    app.get("/ADMdata",async (req,res)=>{
        res.status(200).send(await Feedback_model.find({ tname: "ADM" }));
    });
    app.get("/TKdata",async (req,res)=>{
        res.status(200).send(await Feedback_model.find({ tname: "TK" }));
    });
    app.get("/SLAdata",async (req,res)=>{
        res.status(200).send(await Feedback_model.find({ tname: "SLA" }));
    });
    app.get("/showmeformADM", async (req, res) => {
        res.status(200).send(fs.readFileSync("frontend/feedback/reviewADM.html","utf-8"));
    });
    app.get("/showmeformTK", async (req, res) => {
        res.status(200).send(fs.readFileSync("frontend/feedback/reviewTK.html","utf-8"));
    });
    app.get("/showmeformSLA", async (req, res) => {
        res.status(200).send(fs.readFileSync("frontend/feedback/reviewSLA.html","utf-8"));
    });
    app.listen(80,"127.0.0.1", () => console.log("Server started at localhost"));
}