//line through the li
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500,function() {
    $(this).remove();    
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(ev) {
    if(ev.which === 13)
    {
        //new todo data
        var n= $(this).val(); 
        //empty string
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+   n +"</li>");
    }
});

$(".fa-chevron-circle-down").click(function() {
    $("input[type='text']").fadeToggle(500);
    
});


/*assests / js / lib / jquery - 3.4.1.js*/