
const{MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58c3ec76afcca3267f2c8cb7')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOrignal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: "Luca Pollaci"
    }, {
        $set: {
            name: "Simone Borelli"
        },
        $inc: {age: 1}
    }, {
        returnOrignal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
}); 