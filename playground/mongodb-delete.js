
const{MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany delete all elements which match the criteria
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne delete only the first element which matches the criteria
    // db.collection('Todos').deleteOne({text: 'walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Simone Borelli'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("58a9dd398d27742ae86772a3")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });


    db.close();
}); 