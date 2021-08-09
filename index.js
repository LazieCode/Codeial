const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets')) ;

app.use(expressLayouts);

// doing this to extract the styles and scripts from the body and put them automatically into the header.

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', require('./routes'));
app.get('/profile', require('./routes/users'));
app.get('/posts', require("./routes/posts"));

app.listen(port, function(err){
    if(err){
        console.log("error in starting the server.");
    }

    console.log(`Server fired up at port ${port}`);
})