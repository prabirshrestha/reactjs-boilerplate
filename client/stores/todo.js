import Reflux from 'reflux';
import Immutable from 'immutable';

import todoActions from '../actions/todo';
import TodoRecord from '../records/todo';

let id = 0;

export default Reflux.createStore({
    listenables: [todoActions],

    init() {
        this.todos = new Immutable.OrderedMap();
    },

    getInitialState() {
        return this.todos.toArray();
    },

    onAddTodo(newTodo) {
        newTodo = newTodo.set('id', ++id);
        this.update(this.todos.set(newTodo.id, newTodo));
    },

    onToggleTodo(todoId) {
        let todo = this.todos.get(todoId);
        todo = todo.set('complete', !todo.complete);
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
