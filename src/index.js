const express = require('express');
const app = express();
const port = 3000;

//Settings
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');

//Routes
app.get("/", (req, res) => { 
    res.render('index'); 
});
app.get('/about', (req, res) => {
    res.render('about');
})

//Middleware

// Server Listening
app.listen(port, () => {
    console.log("Server on port 3000");
})