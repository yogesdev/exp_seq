module.exports = app => {
   
  const category = require("../controllers/category.controller.js");

  var router = require("express").Router();
 
  
  router.post("/category", category.categories);
  
  router.get("/subCategories", category.subCategories);
 
  app.use('/api/category', router);
};