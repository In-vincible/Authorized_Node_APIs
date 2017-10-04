const Token = require('../models').token;

module.exports = {
	check(req,res,next)
	{
		Token
		.count({content: req.body.key})
		.then(function(results){
			console.log(results);
			if(results > 0)
				next();
			else
				res.status(401).send({
			message: "Key not Authorized"
		});		
		})
		.catch(error => res.status(401).send({
			message: "Authorization Error!!"
		}));
	},
	
};
