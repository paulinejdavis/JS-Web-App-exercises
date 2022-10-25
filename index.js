//model class

// console.log('This notes app is running')

const TodoListModel = require('./todoListModel');
const model = new TodoListModel();

model.addItem('Buy milk');

console.log(model.getItems());

///mmmmmm