const env = process.env;	//this will not be accessable for other modules.

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
	console.info('**********');
	console.info(message);
	console.info('**********');
};

export default {
	port: env.PORT || 8080
};