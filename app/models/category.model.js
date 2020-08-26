var d = new Date();
var month = d.getMonth() + 1;
if(month < 10)
{
	month = '0'+month;
}
var date = d.getFullYear()+'-'+month+'-'+d.getDate();
var datetime= date+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
let mysql  = require('mysql');
let db_con = require('../config/mysqldb.config.js');
let connection = mysql.createConnection(db_con);
connection.connect();


exports.mainCategories = (data,cb)=>{
    
	let sql = 'SELECT id,category,name FROM `rv_iab_category` ' ;
	//var insert_vals = data;
	 
 // return err;//'result';	
	 	connection.query(sql, (err, results, fields) => {
		   
		  if(err){
			 return err;
		}
		else{
			return results;
		}
		});

}

exports.subCategories = function(){
    
	var sql = 'SELECT id,category,category_name FROM `rv_iab_categories` where status =1' ;
	//var insert_vals = data;
 
	connection.query(sql, (err,result)=>{
		 
		if(err){
			cb(err,null);
		}
		else{
			return res.status(200).json({msg:result,status:'success'});	
			cb(null, result);
		}
	});

}