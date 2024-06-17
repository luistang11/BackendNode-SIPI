import dotenv from "dotenv";
import express from "express";

dotenv.config({path:'./.env'});

import requestRouter from "./src/routes/request.route.js"


const app = express();
app.use(express.json()); //POST Body
app.use(express.urlencoded({ extended: true }));




app.get('/saludo', (req,res)=>{
    res.send("Hola a todos desde express")
})


app.use('/solicitudes',requestRouter)

app.listen(process.env.PORT, () => {
    console.log(`🔥 Listening on port ${process.env.PORT}`);
});