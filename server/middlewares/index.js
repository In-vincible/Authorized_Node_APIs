const validate = require('./validate');
const auth = require('./authenticate');
const adminAuth = require('./adminAuth');
module.exports = {
	adminAuth,
	auth,
	validate,
	};
