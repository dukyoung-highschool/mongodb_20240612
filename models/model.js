import mongoose from "mongoose";

const dataShema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
});

const Model = mongoose.model("dukyoung", dataShema, "dukyoung");
export default Model;