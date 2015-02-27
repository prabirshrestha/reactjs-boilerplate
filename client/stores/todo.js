import Reflux from 'reflux';
import todoActions from '../actions/todo';

var id = 1;

export default Reflux.createStore({
    listenables: [todoActions],

    getInitialState: function () {
        return this.todos = [];
    },

    onAddTodo: function (todo) {
        todo.id = id++;
        this.todos.push(todo);
        this.trigger(this.todos);
    },

    onToggleTodo: function (todo) {
        todo.complete = !todo.complete;
        this.trigger(this.todos);
    },

    onClearCompletedTodos: function () {
        this.todos = this.todos.filter(todo => !todo.complete);
        this.trigger(this.todos);
    }

});
