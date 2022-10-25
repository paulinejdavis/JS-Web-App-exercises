/**
 *  @jest-enironemnt jsdom
 */

const fs = require('fs');

 describe('TodoListView', () => {

    //  const todo = new TodoListView();
    //  todo.displayNotes(['This is a item'])
    it('should display one item on the page', () => {
        //arrange
        document.body.innerHTML =fs.readFileSync('./index.html');
        const view = new TodoListView();

        //act
        view.displayItems(['This is a test item']);

        //assert
        documen

});
