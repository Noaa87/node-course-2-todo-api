const {ObjectID} = require('mongodb');
const _ = require('lodash');
const express = require('express');
const bodyParse = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

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


app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    //get the id
    if(!ObjectID.isValid(id)){
        return res.status(404).send('what the fuck');
    }

    Todo.findByIdAndRemove(id).then((todo) => { 
        if(!todo){
            return res.status(404).send('Id not found');
        }
            res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

    //validate the id -> not valid? return 404

    //remove todo by id
        //success
            // if no doc, send 404
            // if doc, send back with 200
        //error
            //400 with empty body
});


app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send('what the fuck');
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set:body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })

});











app.listen(port, () => {
    console.log(`Started on port ${port}`);
});


module.exports = {app}; //ES6 Object syntax 

