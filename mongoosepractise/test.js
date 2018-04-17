const bcrypt = require('bcryptjs');
const {mongoose} = require('./db');
const {Album} = require('./model');
var passwordHash = require('password-hash');

var passHash = (password) => {
  return passwordHash.generate(password);
}

// var compare = (album, author) => {
//       Album.findOne({album}).then((album) => {
//         if(!album){
//             return "Error";
//         }
//         if(passwordHash.verify(author,album.author)){
//           return album;
//         }
//     })
// }

// function compare(album, author){
//   var q =  Album.findOne({album});
//   console.log(q.author);
// }

// function compare(album, callback) {
//   Album.find({album}, function(err, album) {
//     if (err) {
//       callback(err, null);
//     } else {
//         callback(null, album);
//     }
//   });
// };

// function compare(album, author, callback){
//   Album.findOne({album}, (err, album) => {
//     if(err){
//       callback(err, null);
//     }
//     var compare = passwordHash.verify(author,album.author);
//     console.log(compare);
//     if(compare === true){
//         callback(null, album);
//     }
//   })
// }

var compare = (album, author, callback) => {
  Album.findOne({album}).then((album) => {
    if(!album){
      callback(err, null);
    }
    if(passwordHash.verify(author,album.author)){
      console.log("Album found!");
      callback(null, album);
    }
  });
}

module.exports = {passHash, compare}