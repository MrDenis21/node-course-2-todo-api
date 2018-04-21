const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');
const {ObjectID} = require("mongodb");

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findByIdAndRemove()
// Todo.findOneAndRemove

Todo.findOneAndRemove({_id:"5adba8000cb4b09b27bab449"}).then((todo)=>{

});

Todo.findByIdAndRemove('5adba8000cb4b09b27bab449').then((todo)=>{
    console.log(todo);
});