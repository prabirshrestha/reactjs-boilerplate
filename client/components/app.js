import React from 'react';
import HoverboardListenerMixin from '../utils/HoverboardListenerMixin';

import TodoForm from './todo/form';
import TodoList from './todo/list';

import TodoAction from '../actions/todo';

export default React.createClass({

    mixins: [HoverboardListenerMixin],

    getInitialState() {
        return { todos: [] };
    },

    componentDidMount() {
        this.subscribe(TodoAction.getState(state => this.setState({ todos: state.todos })));
    },

    clearCompleted() {
        TodoAction.clearCompleted();
    },

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <TodoList todos={this.state.todos}/>
                <TodoForm />
                <input type="button" value="Clear all completed todos" onClick={this.clearCompleted} />
            </div>
        );
    }

});
