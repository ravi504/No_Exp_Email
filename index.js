const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send({hello : "Nodejs how are you"});
});

app.listen(5000);