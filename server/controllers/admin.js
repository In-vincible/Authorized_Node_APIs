const bcrypt = require('bcrypt');
const User = require('../models').user;

module.exports = {
	create(req,res) {
		User
		.findAll({
			where: {username: req.body.username}
		})
		.then(function(results){
			if(results.length > 0)
			{
				res.status(401).send({
						message: "User Already Exists with Username!!"
					})
			}
		});		
		
		return User
			.create({
				admin: true,
				username: req.body.username,
				password: bcrypt.hashSync(req.body.pass,10)
			})
			.then(user => res.status(201).send(user))
			.catch(error => res.status(400).send(error));
	},
};