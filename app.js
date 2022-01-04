var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`));
