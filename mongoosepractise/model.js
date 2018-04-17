const mongoose = require('mongoose');

// Creating the model and schemas

var musicSchema = new mongoose.Schema({
    album:{
        type:String,
        minlength:2,
        required: true
    },
    author:{
        type:String,
        minlength:2
    }
});


var Album = mongoose.model('Album', musicSchema);

module.exports = {Album}


// Saving a new Document into the database.

// var album = new Album({
//     album: "Album three",
//     author: "DP"
// });

// album.save().then((album) => {
//     console.log(album);
// }, (e) => {
//     console.log("Error Saving");
// })

// Retrieving something from Database

// Album.findOne({album:'Album three'}, (err, res) => {
//     if (err) throw err;

//     console.log(res);
// });

// Album.findOne({album:'Album three'}).then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log("Unable to find!");
// })

// Album.findOne({album:'Album three'}).then((doc) => {
//     console.log(doc.author);
//     console.log(doc._id);
// }).catch((e) => {
//     console.log("Unable to find!");
// })

// Updating a document:

// Album.findOneAndUpdate({album:'Album three'},{
//     $set:{
//         author: "Vivek Thakur"
//     }},
//     {
//         new:true
//     }
// ).then((doc) => {
//     console.log(doc);
// });