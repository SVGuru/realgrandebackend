
let express = require('express');
let app = express();
let allroutes = require('./routes/AllRoutes');
const mongoose = require('mongoose');


app.use((req,res,next) => {
    console.log(" Request received at " + (new Date()));
    next();
});
// connect to the database
// schema
// model
// from middleware, using model to get data from DB




//connect
let db = async () => {
    try{
        await mongoose.connect("mongodb+srv://honorhomesolutions:Yytt@cluster0.cw2ygsf.mongodb.net/realgrande?retryWrites=true&w=majority");
        //await mongoose.connect("mongodb+srv://honorhomesolutions:Yytt@cluster0.mj1t2ck.mongodb.net/realgrande?retryWrites=true&w=majority");
    }
    catch(err) {
        console.log(' error connecting');
        res.status(500).send(err);
    }
}
db();






app.use('/',allroutes);


// connect to the database
// schema
// model
// from middleware, using model to get data from DB








app.listen(4000,()=>{ console.log("Backend server listening at port 4000")});
