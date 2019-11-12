<<<<<<< HEAD
$(document).ready(function() {
    -$("#barchart_html").on("click", function() {
        $(".graph1").show();
        $(".graph1").show(1000);
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

   // Get all elements that contain an ID of `logoNav`

    $("#logoNav");


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
        $("#hr_graph").removeClass("h2_font_size");
        $("#hr_dashboard").removeClass("h2_font_size");
        $("#hr_scatterplot").removeClass("h2_font_size");
        $("#hr_piechart").removeClass("h2_font_size");
    });


    //applies colour black to body background when mouse enters over buttons


    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black");
    });

    //applies colour grey to body background when mouse leaves buttons

    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee");
    });

=======

/** The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Select all of the anchor elements on the page using the `$` as shorthand

// for the `jQuery` function

$("a");

// The long version of the function

jQuery("a");



// Get all elements that contain a class of `card_image`

$(".card_image");

/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */



// Append a span to every paragraph

$("p").append("<span>lorem ipsum</span>");



// Remove all links using the remove function

$("a").remove();



// Empty all div elements that have a class of card

$("div.card").empty();





// Get all elements that contain an ID of `logoNav`

$("#logoNav");



// Get all anchors that are direct children of paragraphs

$("p>a");



// Get all anchor elements that are descendants of paragraphs

$("p a");


// Get all list item elements that are direct children of unordered lists

$("ul>li");


// Get all list item elements that are descendants of unordered lists

$("ul li");



// Get the first anchor element from the DOM

$("a:first");


// Get the last anchor element from the DOM

$("a:last");



// Select all header elements (h1, h2, h3, h4, h5, h6)

$(":header");

/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */



// Modify the contents of all of the paragraph elements on the page

$("p").text("New text");
>>>>>>> aaa80d53ee77617a1a7a7701b25facf5082d232f
