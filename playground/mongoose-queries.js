const {ObjectId} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59eccfeb5710381b124b642e1';

if (!ObjectId.isValid(id)){
  console.log("Id not valid");
}
/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log("Todos ",todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log("Todo ",todo);
});*/

Todo.findById(id).then((todo) => {
  if (!todo) return console.log("Id not found");
  console.log("Todo by Id ",todo);
}).catch((e) => console.log(e));
