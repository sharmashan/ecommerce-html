function animatemsg(name, title, msg)
{
	$(name).children(".title").text(title);
	$(name).children(".msg").text(msg);
	$(name).animate({top:'15%',opacity:'.9'}, 1000).delay(2500).animate({right:'-300px',opacity:0.1}, 1500);
}


// how to call above function:
// animatemsg('.success-msg', 'wrong password', 'please try again!' );


// to hide animatemsg
$('body').on('click', '.success-msg span, .warning-msg span', function(){
	$(this).parent().remove();
});


// for scrolling things and button
$(document).ready(function(){

	// settings at the time of page load
	$(".faqitem").hide();
	$(".faq1").show();
	$("#rembtn").hide();
	$(".searchhint").hide();



	// on faq link click 
	$(".faqlink").click(function(){
		var link = $(this).attr('data-link');
		$(".faqlink").removeClass("list-group-item-success");
		$(this).addClass("list-group-item-success");
		$(".faqitem").hide();
		$(link).show();
	});



	// nav and btn settings when scrolled
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$("#topnavbar").addClass('navbar-fixed');
			$("#topnavbar").removeClass('nav-not-fixed');
			$("#goup").addClass('go-to-top');
		}
		if($(window).scrollTop() < 101){
			$("#topnavbar").removeClass('navbar-fixed');
			$("#topnavbar").addClass('nav-not-fixed');
			$("#goup").removeClass('go-to-top');
		}
	});


	// Scroll when clicked on Go to Top button
	$("a[href=\\#top]").click(function(){
		$('html,body').animate({scrollTop:0},1000);
	});


	// on cart button click event
	$(".cartbtn").click(function(e){
		e.preventDefault();
		var current 	= $(this);
		var cart 		= $("#cartmodal");
		var title 		= $(current).attr('data-title');
		var product_id = $(current).attr('data-id');

		$(cart).modal();
		$(cart).find(".modal-body p").text(title);
	});


	// search button along with remove button
	$("body").on("mouseover, keyup", '#search, #rembtn', function(){
		if($("#search").val().length > 0){
			$("#rembtn").show();
			$(".searchhint").show();
			$(".searchhint").html("<li class='list-group-item searchitem'>Papaya in Fruits</li>");

		}
	});

	// when to hide remove search button
	$("body").on("mouseleave, keyup", '#search, #rembtn', function(){
		setTimeout(function(){
			if($("#search").val().length < 1){
				$("#rembtn").hide();	
				$(".searchhint").hide();		
			}
		}, 10);
	});

	// when remove search button clicked
	$("#rembtn").click(function(){
		$("#search").val('');
		$("#rembtn").hide();
		$(".searchhint").hide();		
	});

	// when clicked on hint
	$("body").on('click', ".searchitem", function(){
		var text = $(this).text();
		$("#search").val(text);
		$(".searchhint").hide();
	});

});

