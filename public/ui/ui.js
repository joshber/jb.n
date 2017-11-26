$( ".showmore" ).click( function() {
  $( this ).hide();
  $( this ).parent().next( ".more" ).velocity( "slideDown", { duration: 500 } );
  $( this ).next( ".showless" ).show();
});
$( ".showless" ).click( function() {
  $( this ).hide();
  $( this ).parent().next( ".more" ).velocity( "slideUp", { duration: 500 } );
  $( this ).prev( ".showmore" ).show();
});

$( ".showhide" ).click( function() {
  var more = $( this ).next( ".more" );
  if ( more.css( "display" ) === "none" ) {
    more.velocity( "slideDown", { duration: 500 } );
    more.velocity( "scroll", { duration: 750, offset: -50, easing: "ease-in-out" } );
  }
  else {
    more.velocity( "slideUp", { duration: 500 } );
  }
});

$(document).ready(function() {
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    $(target).velocity('scroll', {
      duration: 750,
      offset: -40,
      easing: 'ease-in-out'
    });
  });
});
