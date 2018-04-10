// Main JS File Unminified 
$(function(){

	// Navigation Toggle
	$('[rel="nav-toggle"]').click(function(event) {
	  event.preventDefault();
		$('.main-nav').toggleClass('nav-open');
    $('body').toggleClass('nav-open-body');
	});

  /*
   * Video Player Modal
   * 
   * 
  */
  $('a[rel="videoPlayerToggle"]').click(function(event) {

    event.preventDefault();
    var videoID = $(this).attr('data-videoID');
   
    $('#videoPlayerContainer iframe').attr('src','//www.youtube.com/embed/'+videoID+'?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0');
    $('#videoPlayerContainer').show('slow');
    
  });
  $('#videoPlayerContainer').click(function() {
    $('#videoPlayerContainer').hide('fast');
    $('#videoPlayerContainer iframe').attr('src','');
  });


});