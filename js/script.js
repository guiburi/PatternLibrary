$(function(){
	/**
	* Main menu
	*/
	var mainMenu = $( ".sf-menu" );

	//create the responsive menu by clonin the existing on

	mainMenu
		.clone()
		.removeClass()
		.addClass( "rwd-menu" )
		.prependTo( ".navbar-container nav" );

	//initialize menu
	mainMenu.superfish();

	//Toggle the responsive menu
	$("#rwd-trigger").on('click' , function (e) {
		e.preventDefault();

		$('.rwd-menu').slideToggle();
	});

	/**
	* Animations
	*/

	$("#demo-animations").find(".demo-col").on("click", function(){
		var $this = $(this);

		$this.addClass("animated " + $this.text());
	});

	/*
	* Tabs
	*/
	$(".tabs-links a").on('click', function(e){
			e.preventDefault();

		//get the target
		var newTab = $(this).attr("href");

		//show the targeted tabe while hiding the rest
		$( newTab ).show().siblings().hide();

		//add the active class to the parent list item while removing it from the rest
		$(this).parent("li").addClass("active").siblings().removeClass("active");
		})

})
