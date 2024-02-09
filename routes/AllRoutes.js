
let express = require("express");
const multer = require("multer");
const upload = multer();

const {housesModel, usersModel, enquiriesModel} = require("../models/AllSchemas");

let allroutes = express.Router();


allroutes.get('/',(req,res) => {
    console.log(" reached root");
    res.send("Welcome to realgrande back end server");
});


allroutes.get('/houses',async (req,res) => {
    console.log(" reached /houses");
    try{
        let houses = await housesModel.find({});
        res.send(houses);
    }
    catch(err){
        res.status(500).send(" error while fetching houses");
    }
   
});

// test - dummy action
//allroutes.post('/signup',upload.none(), async (req,res) => {
//     //store data in DB using model, and send newly created object
//     try {
//       console.log(req.body);
//       res.send(" Sign Up Success");
//     }
//     catch(err) {
//       res.status(500).send(" error while signing up");
//     }
// });

allroutes.post('/signup',upload.none(),async (req,res) =>{
    //store data in DB using model , and send the newly created object
    try{
        console.log(req.body);
        // use model and save to back end
        let newuser = new usersModel(req.body)
        let userFromDB = await newuser.save();
        console.log(userFromDB);
        res.send(userFromDB);
    }
    catch(err){
        console.log(" error while adding user. check if it is duplicate");
        console.log(err);
        res.status(500).send(err)
    }
});




allroutes.post('/login',upload.none(),async (req,res) =>{
    //check email password DB using model , and send a success response
    try{
        console.log(req.body);
        // use model and find  
        let response = await usersModel.find({email:req.body.email,password:req.body.password});
        console.log(response);        
        res.send(response);      
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
});

allroutes.post('/addenquiry',upload.none(),async (req,res) =>{
    //get all details and store in db
    try{
        console.log(req.body);
        // use model and save to back end
        let newEnquiry = new enquiriesModel(req.body)
        let enquirySavedFromDB = await newEnquiry.save();
        console.log(enquirySavedFromDB);
        res.send(enquirySavedFromDB);
    }
    catch(err){
        console.log(" error while adding enquiry.");
        console.log(err);
        res.status(500).send(err)
    }
});


allroutes.get('/enquiries',async (req,res) => {
    console.log(" reached /enquiries");
    try{
        let enquiries = await enquiriesModel.find({});
        res.send(enquiries);
    }
    catch(err){
        console.log(err);
        res.status(500).send(" error while fetching enquiries");
    }
   
});




// Ideas from chatGPT, 
//const newData = req.body; // Assuming you send data in the request body
// try {
//   // Create a new instance of the model
//   const newRecord = new YourModel(newData);

//   // Save the record to the database
//   await newRecord.save();
//   res.json({ success: true, message: 'Data saved successfully' });
// } catch (error) {
//     console.error('Error saving data:', error);
//     res.status(500).json({ success: false, error: error.message });
// }

module.exports = allroutes;
