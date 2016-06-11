
$(document).ready(function(){

	$('#button-twitter').on('click', function() {
  		ga('send', 'event', 'Link', 'click', 'Twitter Button');
	});

	$('#button-email').on('click', function() {
  		ga('send', 'event', 'Link', 'click', 'Email Button');
	});

	$('#button-dribbble').on('click', function() {
  		ga('send', 'event', 'Link', 'click', 'Dribbble Button');
	});

	$('#button-linkedin').on('click', function() {
  		ga('send', 'event', 'Link', 'click', 'Linkedin Button');
	});

	$('#nav-home').on('click', function() {
			ga('send', 'event', 'Link', 'click', 'Nav Home Button');
	});

	$('#nav-about').on('click', function() {
			ga('send', 'event', 'Link', 'click', 'Nav About Button');
	});

	$('#nav-contact').on('click', function() {
			ga('send', 'event', 'Link', 'click', 'Nav Contact Button');
	});

});
