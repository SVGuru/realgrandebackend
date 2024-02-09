let express = require('express');
let app = express();
let allroutes = require('./routes/AllRoutes');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());


let corspolicy = {
    origin:"http://localhost:3000"
}
app.use(cors(corspolicy));


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
        console.log(process.env.DBURI);
        await mongoose.connect(process.env.DBURI);
        console.log(" connected to database");
    }
    catch(err) {
        console.log(' error connecting');
        res.status(500).send(err);
    }
}
db();


//connect,  old style - hard coded path
// let db = async () => {
//     try{ 
//         await mongoose.connect("mongodb+srv://honorhomesolutions:Yytt@cluster0.cw2ygsf.mongodb.net/realgrande?retryWrites=true&w=majority");
//          //await mongoose.connect("mongodb+srv://procareer:pro1234@cluster0.mj1t2ck.mongodb.net/realgrande?retryWrites=true&w=majority");
//          console.log(" connected to database");
//     }
//     catch(err) {
//         console.log(' error connecting');
//         res.status(500).send(err);
//     }
// }
// db();



app.use('/',allroutes);


// connect to the database
// schema
// model
// from middleware, use model to get data from DB








app.listen(4000,()=>{ console.log("Backend server listening at port 4000")});
