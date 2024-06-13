import express from "express";


import "./config/db.js";
import dotenv from "dotenv";
dotenv.config({path:'../.env'});


const app = express();
app.use(express.json()); //POST Body
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });




app.get('/saludo', (req,res)=>{
    res.send("Hola a todos desde express")
})


app.listen(process.env.PORT, () => {
    console.log(`🔥 Listening on port ${process.env.PORT}`);
});