const bcrypt = require('bcrypt');
const User = require('../models').user;

module.exports = {
	check(req,res,next)
	{
		User
		.findAll({
			where: {username: req.body.admin}
		})
		.then(function(results){
			console.log(results);
			if(results.length > 0)
			{
				if(bcrypt.compareSync(req.body.adminPass,results[0].password) && results[0].admin)
					next();
				else
					res.status(401).send({
						message: "UnAuthorized User!!2"
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
