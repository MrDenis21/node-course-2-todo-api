var mongoose = require("mongoose");


var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

var emailValidator = function(email) {
    return emailRegex.test(email);
};

var customErrMessage = [emailValidator, "Email is invalid!"];

var User = mongoose.model("User",{
    email: {
        type: String,
        required:true,
        validate: customErrMessage
    }
});

module.exports = {User};