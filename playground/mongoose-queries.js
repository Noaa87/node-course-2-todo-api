const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58ea08d3615dc206b0b57fe411';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => { 
//     if(!todo){
//         console.log('Id not found');
//     }else 
//         console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '58ea105c0f30be002cd09b68';

User.findById(id).then((user) => { 
    if(!user){
        return console.log('Id not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));