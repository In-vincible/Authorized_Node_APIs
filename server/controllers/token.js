const Token = require('../models').token;
const bcrypt = require('bcrypt');

module.exports = {
	create(req,res) {
		
		return Token
			.create({
				content: bcrypt.hashSync("key"+req.body.username+parseInt(Math.random()*100000),10),
				role: req.body.role,
			})
			.then(token => res.status(201).send(token))
			.catch(error => res.status(400).send(error));
	},
};
