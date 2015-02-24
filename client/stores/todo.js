var Reflux = require('reflux');
var todoActions = require('../actions/todo');

var todoStore = Reflux.createStore({
	listenables: [todoActions],

	getDefaultData: function () {
		return this.todos = [];
	},

	onAddItem: function (item) {
		var todos = this.todos.concat([item]);
		this.update(todos);
	},

	onRemoveItem: function (id) {
		var todos = this.todos.reduce(function (todos, item) {
			if (item.id !== id) {
				todos.push(item)
			}
			return todos;
		}, []);
		this.update(todos);
	},

	updateTodos: function (todos) {
		this.todos(todos);
		this.trigger(todo);
	}
});

module.exports = todoStore;