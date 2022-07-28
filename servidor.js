 const express = require ("express");
 const app = express();
 const db = require("mysql");

 app.get("/", (req, res) =>{
     res.send("hello world");
 });

 app.listen(3001, () => {
     console.log("rodando servidor");
 });

console.log("Hello world!");