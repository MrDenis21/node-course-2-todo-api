// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    assert.equal(null,err);
    console.log("connected to mongodb server");

    var db = client.db('mytestingdb');

    // db.collection("Todos").find({
    //     _id: new ObjectId("5ad6d0f524f3735e4eb9c893")
    // }).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Todos").find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({
        name: "Denis"
    }).toArray().then((users)=>{
        console.log("Users");
        console.log(JSON.stringify(users,undefined,2));
    },(err)=>{
        console.log("Unable to fetch users", err);
    });

    // client.close();
});

