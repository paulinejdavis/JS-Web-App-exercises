const TodoListModel = require("./todoListModel");

describe('TodoListModel', () => {
    it('returns an empty list of items', () => {
        const model = new TodoListModel();

        expect(model.getItems()).toEqual([]);
    });

    it('adds a new item to list of items', () => {
        const model = new TodoListModel();
        model.addItem('Cancel membership');

        expect(model.getItems()).toEqual(['Cancel membership']);
    });

    it('clear items', () => {
        const model = new TodoListModel();

        model.addItem('Cancel membership');
        model.addItem('Buy milk');
        model.clear();

        expect(model.getItems()).toEqual([]);
    });
});