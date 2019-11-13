$(document).ready(function() {
    -$("#index.html#part1graphs_btn").show() 
        $("#index.html#part1graphs_btn").show(1000);
        $("#button_effects1").click(function(){
        $('#button_effects1').hide('slow');
    });
});


    $(document).ready(function() {
    $("#button_effects1").click(function(){
        $('#par1').toggle('1000');
    });
    $("#button_effects2").click(function(){
        $('#par2').toggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').toggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').toggle('1000');
    });
});


    $(document).ready(function() {
        -$("#barChart_html").on("click", function() {
  
    $(document).ready(function() {
    // Create the slideToggle effects each of the paragraphs and
    // buttons

    $("#button_effects4").click(function(){
        $('#par4').slideToggle('1000');
    });
});

// Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button

    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });
    $("#button_effects2").mouseenter(function(){
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function(){
        $('#button_effects2').fadeTo(1000, 1);
    });
    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });
    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

//waits until page is loaded first

    $(document).ready(function(){
    //applies colour red to paragraphs when clicked on
    $("p").click(function(){
        $("p").addClass("highlight_text");
    });
});

//will add lightblue to h2 elements

    $("h2").hover(function(){
        $("h2").addClass( "h2_color");
    });
});
    
    //applies colour black to body background when mouse enters over buttons

    $(".bottom_button").mouseenter(function(){
        $("body").piechart( "background-color", "black"); 
    });
        
    //applies colour grey to body background when mouse leaves buttons

    $(".bottom_button").mouseleave(function(){
        $("body").piechart( "background-color", "#eee"); 
    });
});    