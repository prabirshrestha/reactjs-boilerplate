import React from 'react';

import todoAction from '../../actions/todo';

export default React.createClass({

    propTypes: {
        todo: React.PropTypes.object.isRequried
    },

    onClick() {
        todoAction.toggleTodo(this.props.todo);
    },

    render() {
        var style = {
          textDecoration: this.props.todo.complete ? "line-through" : ""
        };

        return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>
    }
});
