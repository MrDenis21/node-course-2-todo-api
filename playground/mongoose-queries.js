const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');
const {ObjectID} = require("mongodb");

var id = "6ad8b7fbe5e1b72da4090359";

if(!ObjectID.isValid(id)){
    console.log("id not valid");
}

User.findById(id).then((user)=>{
    if(!user){
        return console.log("Unable to find user by this ID");
    }
    console.log('User found by ID',user);
}).catch((e)=>{
    console.log(e);
});

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log("ID is not found");
//     }
//     console.log('Todo by ID',todo);
// }).catch((e)=>{
//     console.log(e);
// })