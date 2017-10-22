var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAPP');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: true
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

/*var newTodo = new Todo({
  text: 'Cook dinner'
});
newTodo.save().then((doc) => console.log("Saved todo",doc),
(e) => console.log("Unable to save todo"));

var otherTodo = new Todo({});
otherTodo.save().then((doc) => console.log(JSON.stringify(doc, undefined, 2)),
(e) => console.log("Unable to save todo"));*/

var newUser = new User({
  email: "fercon997@gmail.com"
});

newUser.save().then((doc) => console.log('User saved ',doc),
(e) => console.log('Unable to save user',e));
