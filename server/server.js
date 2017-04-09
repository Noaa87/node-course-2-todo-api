const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParse = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParse.json());

app.post('/todos', (req, res) => {
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
        res.send({todos})
        }, (e) => {
            res.status(400).send(e);
    });
});

//Get /todos/1233455
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send('what the fuck');
    }

    Todo.findById(id).then((todo) => { 
        if(!todo){
            res.status(404).send('Id not found');
        }else 
            res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

    //valid id using isValid
        //404 - send back empty sned
    
    //findById
        //success
            //if todo - send it back
            //if no todo - send back 404 with empty body
        //error
            //400 - and send empty body back
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {app}; //ES6 Object syntax 

