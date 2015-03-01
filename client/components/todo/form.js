import React from 'react';

import TodoActions from '../../actions/todo';
import TodoRecord from '../../records/todo';

export default React.createClass({

    onSubmitForm(e) {
        e.preventDefault();

        let $text = this.refs.todo.getDOMNode();
        let text = $text.value.trim();

        if (text) {
            let newTodo = new TodoRecord({ text: text, complete: false });
            TodoActions.add(newTodo);
            $text.value = '';
        }
    },

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input ref="todo" type="text" placeholder="New Todo" />
                <input type="submit" value="Add Todo" />
            </form>
        );
    }

});
