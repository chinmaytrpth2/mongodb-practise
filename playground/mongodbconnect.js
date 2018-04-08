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

    // db.collection('Todos').insertOne({
    //     text: "Some text here!",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert in TodoApp.", err);
    //     }
    //     console.log(JSON.stringify(result.ops), undefined, 2);
    // });

    // db.collection('Users').insert({
    //     name: "Chinmay",
    //     age: 21,
    //     location: "Noida"
    // }, (err, result) => {
    //     if (err) throw err;
    //     else{
    //         console.log("User Data added:" + "\n" + JSON.stringify(result));
    //     }
    // });

    client.close();
});