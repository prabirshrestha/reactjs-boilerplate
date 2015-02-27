import React from 'react';

import TodoItem from './item';

var TodoList = React.createClass({

    propTypes: {
        todos: React.PropTypes.array.isRequried
    },

    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <li key={todo.id}><TodoItem todo={todo}/></li>
                )}
            </ul>
        );
    }

});

module.exports = TodoList;
