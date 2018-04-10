
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = "123abc!";

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    }); 
});


// data = {
//     id:10
// }
// token = jwt.sign(data, '123abc');
// console.log(token);

// // jwt.verify
// decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = "I am a user no.3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hashed Message: ${hash}`);

// var data = {
//     id:4 
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + "somesecret").toString() 
// }
// var resultHash = SHA256(JSON.stringify(data) + "somesecret").toString() ;

// if(resultHash === token.hash){
//     console.log("Data was not changed.");
// }
// else{
//     console.log("Data was change!");
// }