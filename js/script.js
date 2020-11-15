
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
        $("p").addClass("card_par2 highlight_text"); 
    });


    // Toggle the visibility of the paragraph when a button is clicked 

	$("button").click(function(){
		$(this).prev().slideToggle('slow');

	});

	// Open the paragraph once the image is clicked

	$("img").click(function() {
		$(this).next().children("p").slideDown();

	});


	$(".card").click(function() {
		$(this).toggleClass("highlight");	 

	});
	
	// All cards that are not currently selected will be hidden when `select_btn` is clicked

	$("#select_btn").click(function() {

		$(".card:not(.highlight)").hide();	 

	});

// Select all cards

	$("#all_btn").click(function(){

		$(".card").show();	
		
	});

});



    
    