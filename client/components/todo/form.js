import React from 'react';

import todoAction from '../../actions/todo';

export default React.createClass({

    getInitialState() {
        return { newTodoText: '' };
    },

    handleTodoTextChange(e) {
        this.setState({ newTodoText: e.target.value });
    },

    onSubmitForm(e) {
        e.preventDefault();

        var text = this.state.newTodoText.trim();
        if (text) {
            todoAction.addTodo({ text: text, complete: false });
            this.setState({ newTodoText: '' });
        }
    },

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input type="text" placeholder="New Todo"
                    value={this.state.newTodoText}
                    onChange={this.handleTodoTextChange} />
                <input type="submit" value="Add Todo" />
            </form>
        );
    }

});
