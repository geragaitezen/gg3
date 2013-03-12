jQuery(document).ready(function($) {
	$('#centerbutton').click(function(e) {
		e.preventDefault();
		$('.circles li a').toggleClass('out');
		$(this).toggleClass('centerbuttonon');
	});;
});
