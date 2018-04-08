// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err){
        console.log("Unable to connect to MongoDB server!");
    }
    else{
        var db = client.db('TodoApp');
        console.log("Connected to MongoDb Server!");
    }
    // db.collection('Todos').find(
    //     {_id: new ObjectID("5ac9f5b4ff8349cf75567a7c")}
    // ).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs), undefined, 2);
    // }, (err) => {
    //     console.log("Unable tp fetch todos", err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos: ${count}`);
    }, (err) => {
        console.log("Unable tp fetch todos", err);
    });

    db.collection('Users').find({
        name: "Chinmay"
    }).toArray().then((docs) => {
        console.log(`User: ${JSON.stringify(docs)}`);
    }, (err) => {
        console.log("Unable tp fetch todos", err);
    });
    // client.close();
});