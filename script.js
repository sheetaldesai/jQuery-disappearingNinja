$(document).ready(function(){
    $("td").click(function(e){     
        $(this).children("img").hide("slow");
    });

    $("#restore").click(function(e){     
        $('td').children("img").show("slow");
    });

});