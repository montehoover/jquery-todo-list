var toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

var displayItem = function(s) {
    $('#to-do-list').append('<li>' + s 
        + '<button class="delete ">Delete</button></li>');
}

var addItem = function(e) {
    if (s) {
        e.preventDefault();
        var s = $('#text-input-box').val();
        toDoList.push(s);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
        displayItem(s);
        $(this)[0].reset();
    }
}

var deleteItem = function(e) {
    $(this).parent().remove();
    toDoList.splice(toDoList.indexOf($(this).val()) ,1);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

    ////////////////////////////
    // Setup Page and event listeners
    ////////////////////////////

$(document).ready(function() {
    toDoList.forEach(function(i) { displayItem(i) });
    $('#to-do-list').sortable();

    $('#new-item-form').submit(function(e) {
        e.preventDefault();
        addItem();
        
    });

    $('#to-do-list').on('click', '.delete', deleteItem);
});