var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //set it up to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://<noaa87>:<falcon900>@ds013330.mlab.com:13330/mongodb-node-todo-api'
};
mongoose.connect( db.localhost || db.mlab);

module.exports = {mongoose};