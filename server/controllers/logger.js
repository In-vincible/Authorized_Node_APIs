module.exports = {
	hello(req,res,next) {
		console.log("logged!!");
		next();	
	},
};