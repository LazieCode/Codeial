const express = require('express');
const port = 8000;
const app = express();

app.get('/', require('./routes'));
app.get('/profile', require('./routes/users'));
app.get('/posts', require("./routes/posts"));

app.listen(port, function(err){
    if(err){
        console.log("error in starting the server.");
    }

    console.log(`Server fired up at port ${port}`);
})