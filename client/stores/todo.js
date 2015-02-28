import Reflux from 'reflux';
import Immutable from 'immutable';

import todoActions from '../actions/todo';

let id = 1;

export default Reflux.createStore({
    listenables: [todoActions],

    getInitialState() {
        return this.todos = new Immutable.OrderedMap();
    },

    onAddTodo(todo) {
        todo.id = id++;
        this.todos = this.todos.set(todo.id, todo);
        this.trigger(this.todos);
    },

    onToggleTodo(todoId) {
        let todo = this.todos.get(todoId);
        todo.complete = !todo.complete;
        this.todos = this.todos.set(todoId, todo);
        this.trigger(this.todos);
    },

    onClearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.complete);
        this.trigger(this.todos);
    }

});
