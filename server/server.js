var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // Checking if the ID is valid!
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    // NOTE! -> Using return helps in stopping the execution of the function if anything gets wrong or if it gets executed

    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo})
    }, (e) => {
        res.status(404).send();
    });

});

app.listen(3000, () => {
    console.log("Server is running on port:3000");
});
