const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {mongoose} = require('./db');
const {Album} = require('./model');
const bcrypt = require('bcryptjs');
const {passHash, compare} = require('./test');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/mongotest', (req, res) => {
    Album.find().then((docs) => {
        res.send({docs});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/mongotest', (req, res) => {
    var body = _.pick(req.body, ["album", "author"]);
    var hashValue = passHash(body.author);
    body.author = hashValue;
    console.log(hashValue);
    var album = new Album(body);
    album.save().then((album) => {
        res.send({album});
    }, (e) => {
        res.send("Error in saving!");
    })
    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(album.author, salt, (err, hash) => {
    //         album.author = hash;
    //         album.save().then((album) => {
    //             res.send({album});
    //         }, (e) => {
    //             res.send("Error saving!");
    //         });
    //     }); 
    // });
});

app.post('/mongotestlogin', (req, res) => {
    var body = _.pick(req.body, ["album", "author"]);
    album = body.album;
    author = body.author;
    compare(album, author, (err, doc) => {
        if(err){
            res.status(400).send();
        }
        else{
            res.send(`Your album name is: ${doc.album} and author hashed is: ${doc.author}`);
        }
    });

    // compare(album, author, function(err, album) {
    //     if (err) {
    //       console.log(err);
    //     }
    //     var s = album.album;
    //     var l = album.author;
    //     res.send("OK");
    //   });

    // var result = compare(album, author);
    // res.send({result});
    // Album.findOne({album}).then((album) => {
    //     if(!album){
    //         res.send("Error");
    //     }
    //     else{
    //         // console.log(album.author);
    //         // bcrypt.compare(author, album.author, (err, res) => {
    //         //     if(err) throw err;

    //         //     res.send({album});
    //         // });
    //         // bcrypt.compare(author, album.author, function(err, resp) {
    //         //     console.log(resp);
    //         // });
    //         bcrypt.compare(author, album.author).then(function(resp) {
    //             if(resp == true){
    //                 res.send({album})
    //             }
    //             else{
    //                 res.send("Error!");
    //             }
    //         });
    //     }
    // })
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
})
