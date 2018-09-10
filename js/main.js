// Main JS File Unminified 
$(function(){

	// Navigation Toggle
	$('[rel="nav-toggle"]').click(function(event) {
	  event.preventDefault();
		$('.main-nav').toggleClass('nav-open');
    $('body').toggleClass('nav-open-body');
	});

  $('[rel="scroll-to-anchor"]').click(function(event) {
    var link = $(this).attr('href'),
        link = link.replace('{{ site.baseurl }}/','');
    $('.main-nav').toggleClass('nav-open');
    $('body').toggleClass('nav-open-body');
    scrollPageToAnchor(link);
  });

function scrollPageToAnchor(anchorID){
  var aTagName = '#'+anchorID,
    aTag = $(anchorID).offset();

  var aTagTop = aTag.top,
    aTagAddOffset = 10,
    aTagOffset = aTagTop-aTagAddOffset;

  $('html,body').animate({scrollTop: aTagOffset},'slow');
}


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