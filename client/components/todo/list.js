import React from 'react';

import TodoItem from './item';

export default React.createClass({

    propTypes: {
        todos: React.PropTypes.array.isRequired
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
