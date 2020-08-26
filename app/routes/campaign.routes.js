module.exports = app => {
   
  const campaign = require("../controllers/campaign.controller.js");

  var router = require("express").Router();
 
  
  router.get("/campaign", campaign.listing);
  
  router.post("/addCampaign", campaign.addcampaign);
 
  app.use('/api/campaign', router);
};