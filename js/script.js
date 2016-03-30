var toDoList = []

$('#new-item-form').submit(function(e) {
    e.preventDefault();
    toDoList.push($('#text-input-box').val());
    $('#to-do-list-div').html('');
    for(var i = 0; i < toDoList.length; i++) {
        $('#to-do-list-div').append('<li>' + toDoList[i] + '</li>');
    }
    $(this)[0].reset();
});