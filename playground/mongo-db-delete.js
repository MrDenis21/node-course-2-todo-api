// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    assert.equal(null,err);
    console.log("connected to mongodb server");

    var db = client.db('mytestingdb');

    //deleteMany
    // db.collection("Todos").deleteMany({text:"walk a dog"}).then((result)=>{
    //     console.log(result);
    // });

    // deleteOne
    // db.collection("Todos").deleteOne({text:"study react later"}).then((result)=>{
    //     console.log(result.result);
    // });

    //find one and delete
    db.collection("Users").findOneAndDelete({age: "22"}).then((result)=>{
        console.log(result);
    });

    // db.collection("Users").deleteMany({name:"Denis"}).then((result)=>{
    //     console.log(result);
    // });

    // client.close();
});

