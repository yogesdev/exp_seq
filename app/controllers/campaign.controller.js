const db = require("../models");

const Campaign = require("../models/campaign.model.js");

// let config = require('./db.js');
exports.addcampaign3 = (req, res) => {
   
    if (!req.body.campaignname) {
      res.status(400).send({
        message: "Campaign name can not be empty!"
      });
      return;
    }
    else
    {
      ccc =  Campaign.campaignCheck(req.body);
      console.log(ccc);

      return res.status(200).json({msg:'Campaign Added successfully ',status:'success'});      
     
    }
    

};

exports.listing = (req, res) => {
   
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    else
    {
      insertion = Campaign.campaignCheck(req.body);
      console.log(insertion);
      if(insertion==true){
        return res.status(200).json({msg:'Campaign Added successfully ',status:insertion});      
      }
      else{
        return res.status(200).json({msg:'Campaign Added failed ',status:insertion});      
      }
      
      
    }
    

};
const Tutorial = db.campaign;
// Create and Save a new Tutorial
exports.addcampaign = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    campaignname: req.body.campaignname,
    revenue: req.body.revenue,
    revenue_type: req.body.revenue_type ? req.body.revenue_type : false
  }; 

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the campaign."
      });
    });
};
// connection.end();