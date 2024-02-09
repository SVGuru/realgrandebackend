let mongoose = require('mongoose');
let houseSchema = new mongoose.Schema(
    {  
        "_id": {
          "type": "Number"
        }, 
        "address": {
          "type": "String",
          "required": true
        },
        "county": {
          "type": "String",
          "required": true
        },
        "description": {
          "type": "String",
          "required": true
        },
        "price": {
          "type": "Number",
          "required": true
        },
        "photo": {
          "type": "String",
          "required": true
        }
      }
);

let enquirySchema = new mongoose.Schema( 
    {
      "address": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "email": {
        "type": "String"
      },
      "mobilenum": {
        "type": "String"
      },
      "remarks": {
        "type": "String"
      }, 
      "date": {
        "type": "Date",
        default: new Date()
      }
  
    }
);

let userSchema = new mongoose.Schema(
      {
        "name": {
          "type": "String",
          "required": true
        },
        "email": {
          "type": "String",
          "required": true
        },       
        "password": {
          "type": "String",
          "required": true
        }, 
        "phone": {
          "type": "String",
          "required": true
        },
        "role": {
          "type": String,
          "required": true,
          "default": "customer"
        }
      }
);

//let Houses = mongoose.model('House',houseSchema);
let housesModel = mongoose.model('House',houseSchema);
let usersModel = mongoose.model('User',userSchema);
let enquiriesModel = mongoose.model('Enquiry',enquirySchema);

module.exports = { housesModel, usersModel, enquiriesModel };
