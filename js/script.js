    $(document).ready(function() {
      -$("#barchart_1").show() 
        $("#barchart_1").show(1000);
        $("#button_effects1").click(function(){
        $('#button_effects1').hide('slow');
        });
    });

   $("#barchart2_html").on("click", function() {
        $(".graph1").removeClass('highlight_graph');
        $(".graph2").removeClass('highlight_graph');
        $(".graph3").removeClass('highlight_graph');
        $(".graph2").addClass('highlight_graph');
   });

    $("#barchart3_html").on("click", function() {
        $(".graph1").removeClass('highlight_graph');
        $(".graph2").removeClass('highlight_graph');
        $(".graph3").removeClass('highlight_graph');
        $(".graph3").addClass('highlight_graph');
    });

    $("#barchart4_html").on("click", function() {
        $(".graph2").removeClass('highlight_graph');
        $(".graph3").removeClass('highlight_graph');
        $(".graph4").removeClass('highlight_graph');
        $(".graph4").addClass('highlight_graph');
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
});$(document).ready(function() {
    -$("#barchart_html").on("click", function() {
  

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

    /*
    this will apply larger font size to the active h2 element
    by adding the h2_font_size class but
    not the other h2 elements by removing class h2_font_size from them
    */

    $("#hr_html").hover(function(){
        $("#hr_barchart").removeClass("h2_font_size");
        $("#hr_barchart2").removeClass("h2_font_size");
        $("#hr_scatterplot").removeClass("h2_font_size");
        $("#hr_piechart").removeClass("h2_font_size");
    });


    //applies colour black to body background when mouse enters over buttons

    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black");
    });

