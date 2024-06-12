import express from "express";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes/routes.js";

console.log(`자 몽고db에 접속해 볼까나?`);
mongoose
    .connect(
        'mongodb+srv://shindalsoo:sds9050%40%23!@zioyou.zkjwmfy.mongodb.net/myFirstDatabase?authSource=admin'
    )
    .then(()=>{
        console.log("몽고DB 아틀라스 나의계정 접속 성공");
    })
    .catch((e)=>{
        console.log(e);
    })

const app = express();

app.use(express.json());
app.use("/api", routes);
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("index.html"));
})

app.listen(8088, ()=>{
    console.log(`웹서버 시작됨 http://localhost:${8088}`);
})