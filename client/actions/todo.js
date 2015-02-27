import Reflux from 'reflux';

var actions = Reflux.createActions([
    "addTodo",
    "toggleTodo",
    "clearCompletedTodos"
]);

module.exports = actions;