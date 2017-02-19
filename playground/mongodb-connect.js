// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//ES6 DESTRUCTORING
// var user = {name: 'Simone', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert new doc into the Users (name, age, location);
    // db.collection('Users').insertOne({
    //     name: 'Simone Borelli',
    //     age: 29,
    //     location: 'Czechia, Praha 9, Kubova 2'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert User');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });



    db.close();
});