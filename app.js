const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/admin');
const sequelize = require('./util/database');

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:false})); 
app.use('/admin',routes);
app.use('/',(req, res, next)=>{
    
    res.send("<h1>Active</h1>");
} );
sequelize.sync().then(resolve =>{   
    console.log("Server synced");
    app.listen(5000);
}).catch(err => console.log(err));

