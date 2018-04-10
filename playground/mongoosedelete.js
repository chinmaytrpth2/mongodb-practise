var {ObjectID} = require('mongodb');

var {moongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todos');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((doc) => {
//     console.log(doc)
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove()