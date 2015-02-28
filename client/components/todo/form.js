import React from 'react';

import todoAction from '../../actions/todo';
import TodoRecord from '../../records/todo';

export default React.createClass({

    getInitialState() {
        return { newTodoText: '' };
    },

    handleTodoTextChange(e) {
        this.setState({ newTodoText: e.target.value });
    },

    onSubmitForm(e) {
        e.preventDefault();

        let text = this.state.newTodoText.trim();
        if (text) {
            todoAction.addTodo(new TodoRecord({ text: text, complete: false }));
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
