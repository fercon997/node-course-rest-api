//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log("Unable to connect to MongoDB server");
  console.log("Connected to MongoDB server");
  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId("59eb55e70eb663adb33d57bb")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => console.log(result));*/
  db.collection('Users').findOneAndUpdate({name: "Fernando"}, {
    $set: {
      location: "Caracas"
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((result) => console.log(result));
  //db.close();
});
