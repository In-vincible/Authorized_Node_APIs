const bcrypt = require('bcrypt');
const User = require('../models').user;

module.exports = {
	check(req,res,next)
	{
		User
		.findAll({
			where: {username: req.body.username}
		})
		.then(function(results){
			if(results.length > 0)
			{
				console.log(results);
				console.log("#######"+results[0].pass+"########");
				if(bcrypt.compareSync(req.body.pass,results[0].password))
					next();
				else
					res.status(401).send({
						message: "UnAuthorized User!!"
					})
			}
			else
				res.status(401).send({
			message: "UnAuthorized User!!"
		});		
		})
		.catch(error => res.status(401).send({
			message: "Authorization Error!!"
		}));
	},
	
};
