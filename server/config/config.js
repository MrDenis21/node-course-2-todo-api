var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });


    // console.log(envConfig.MONGODB_URI);
    // console.log(envConfig.PORT);
    // console.log(process.env.JWT_SECERT);
}
