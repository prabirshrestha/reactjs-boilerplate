import Hoverboard from 'hoverboard';
import Immutable from 'immutable';

export default Hoverboard({
    _nextId: 1,

    _todos: new Immutable.OrderedMap(),

    getInitialState() {
        return { todos: this._todos.toArray() };
    },

    onAdd(newTodo) {
        newTodo = newTodo.set('id', this._nextId++);
        this.update(this._todos.set(newTodo.id, newTodo));
    },

    onToggle(id) {
        let todo = this._todos.get(id);
        todo = todo.set('complete', !todo.complete);
        this.update(this._todos.set(id, todo));
    },

    onClearCompleted() {
        this.update(this._todos.filter(todo => !todo.complete));
    },

    update(todos) {
        this._todos = todos;
        this.setState({ todos: todos.toArray() });
    }
});
