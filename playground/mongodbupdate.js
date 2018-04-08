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
    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID("5ac9f22133b7130a108993c4")
        },
        {
            $set:{
                name: "Ankit"
            },
            $inc:{
                age: 25
            }
        },
        {
            returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});