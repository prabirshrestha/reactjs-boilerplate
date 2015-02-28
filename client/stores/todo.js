import Reflux from 'reflux';
import Immutable from 'immutable';

import todoActions from '../actions/todo';

let id = 1;

export default Reflux.createStore({
    listenables: [todoActions],

    init() {
        this.todos = new Immutable.OrderedMap();
    },

    getInitialState() {
        return this.todos.toArray();
    },

    onAddTodo(todo) {
        todo.id = id++;
        this.update(this.todos.set(todo.id, todo));
    },

    onToggleTodo(todoId) {
        let todo = this.todos.get(todoId);
        todo.complete = !todo.complete;
        this.update(this.todos.set(todoId, todo));
    },

    onClearCompletedTodos() {
        this.update(this.todos.filter(todo => !todo.complete));
    },

    update(todos) {
        this.todos = todos;
        this.trigger(todos.toArray());
    }

});
