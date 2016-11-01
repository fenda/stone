$(document).ready(function(){
	if ( $( ".clients__slider" ).length ) {
		$('.clients__slider').owlCarousel({
			loop:true,
			dots:true,
			items: 1
		});
	}
});