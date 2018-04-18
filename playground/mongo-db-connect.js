// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    assert.equal(null,err);
    console.log("connected to mongodb server");

    var db = client.db('mytestingdb');

    // db.collection('inventory').insertOne({
    //     text:"something",
    //     completed: false
    // }, (err,result)=>{
    //     assert.equal(null,err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("Users").insertOne({
    //     name: "Denis",
    //     age: "20",
    //     location: "Test location"
    // },(err,result)=>{
    //     assert.equal(null,err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    client.close();
});

