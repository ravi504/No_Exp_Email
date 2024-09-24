const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send({hello : "Node"});
});

app.listen(5000);