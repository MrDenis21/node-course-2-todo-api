// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    assert.equal(null,err);
    console.log("connected to mongodb server");

    var db = client.db('mytestingdb');

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectId("5ad78a957fd39072ff3c373b")
    // }, {
    //     $set: {  // <= update operator
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectId("5ad8339d7fd39072ff3c4729")
    }, {
        $set: {  // <= update operator
            name:"Denis"
        },
        $inc: {
            age:2
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

    // client.close();
});

