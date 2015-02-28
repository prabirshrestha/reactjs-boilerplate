import React from 'react';

import todoAction from '../../actions/todo';

export default React.createClass({

    propTypes: {
        todo: React.PropTypes.object.isRequired
    },

    onClick() {
        todoAction.toggleTodo(this.props.todo.id);
    },

    render() {
        let style = {
          textDecoration: this.props.todo.complete ? "line-through" : ""
        };

        return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>
    }
});
