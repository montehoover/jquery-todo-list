$(document).ready(function() {

    var toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

     var displayItem = function(s) {
        $('#to-do-list').append('<li class="ui-state-default">' + s 
            + '<button class="delete ">Delete</button></li>');
    }

    // $('#to-do-list').html('');

    for (var i = 0; i < toDoList.length; i++) {
        displayItem(toDoList[i]);
    }

    $('#new-item-form').submit(function(e) {
        e.preventDefault();
        var x = $('#text-input-box').val();
        if (x) {
            toDoList.push(x)
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
            displayItem(x);
        }
        $(this)[0].reset();
    });

    $(document).on('click', '.delete', function(e) {
        $(this).parent().remove();
        var i = toDoList.indexOf($(this).val());
        toDoList.splice(i,1);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
    });

    $(function() {
        $('#to-do-list').sortable();    
    });

});