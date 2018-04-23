var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
const _ = require('lodash');

var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

var emailValidator = function(email) {
    return emailRegex.test(email);
};
var customErrMessage = [emailValidator, "Email is invalid!"];

var UserSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required:true,
        validate: customErrMessage
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access},'testsecret1').toString();

    user.tokens.push({access, token});

    return user.save().then(()=>{
        return token;
    });
};



var User = mongoose.model("User", UserSchema);

module.exports = {User};