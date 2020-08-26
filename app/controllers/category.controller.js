const db = require("../models");

const Categories = require("../models/category.model.js");

// let config = require('./db.js');
exports.categories = (req, res) => {
   
    
       category = Categories.mainCategories();
console.log(category);
      if(category)
      {
        return res.status(200).json({msg:'Main categories ',status:'success', data:category});      
      }
      else
      {
        return res.status(200).json({msg:'Main categories ',status:'error', data:false});      
      }
     
     
    

};

exports.subCategories = (req, res) => {
   
    
      var categories = Categories.subCategories();

      if(categories)
      {
        return res.status(200).json({msg:'Main categories ',status:'success', data:categories});      
      }
      else
      {
        return res.status(200).json({msg:'Main categories ',status:'error', data:false});      
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


// connection.end();