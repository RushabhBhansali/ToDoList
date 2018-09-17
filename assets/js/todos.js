//check off specific todos by clicking
    $("ul").on("click","li",function () {
        $(this).toggleClass("completed");
    });

//click on X to delete todo
$("ul").on("click","span", function (event) {
    $(this).parent().fadeOut(200,function () {
        $(this).remove();
    });
    event.stopPropagation();
});

/*There is a problem with the code below because the newley added
elements will not have the listeners added on them. That is why we should be using on('click') */

$("input[type='text']").keypress(function(eve){
    if(eve.which === 13){
        var toDoText = $(this).val();
        if(toDoText){
            $("ul").append("<li><span><i class=\'far fa-trash-alt\'></i></span> "+toDoText+"</li>");
        }
    }
})

