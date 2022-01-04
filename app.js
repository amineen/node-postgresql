const express = require('express');
require("dotenv");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    res.status(200).json({
        msg:"Welcome to API testing postgresql",
        version:"0.0.1",
        developer:"Aaron Mineen",
        github:"https://github.com/amineen/node-postgresql"
    })
})

PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`));
