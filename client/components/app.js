import React from 'react';
import Reflux from 'reflux';

import TodoForm from './todo/form';
import TodoList from './todo/list';

import todoAction from '../actions/todo';
import todoStore from '../stores/todo';

var App = React.createClass({

    mixins: [Reflux.connect(todoStore, "todos")],

    clearCompletedTodos() {
        todoAction.clearCompletedTodos();
    },

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <TodoList todos={this.state.todos}/>
                <TodoForm />
                <input type="button" value="Clear all completed todos" onClick={this.clearCompletedTodos} />
            </div>
        );
    }

});

module.exports = App;
