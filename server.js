const express = require('express');
const path = require('path');
const appFolder = "Demo";
const appFName = "demo.html"
const app = express();
const port = 8080;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/${ appFolder }/${ appFName }"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});