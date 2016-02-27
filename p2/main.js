$(".p1").html("Nuevo parrafo");

$(document).ready(function(){
    $("button").click(function(){
        $(".p").replaceWith("Hello world!");
    });
});
