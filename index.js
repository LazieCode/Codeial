const express = require('express');
const port = 8000;

const app = express();






app.listen(port, function(err){
    if(err){
        console.log("error in starting the server.");
    }

    console.log(`Server fired up at port ${port}`);
})