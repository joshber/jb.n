$("h2").nextUntil("h2").velocity( { opacity: 1 }, { display: "none" } );
$(document).ready( function(){
  $("h2").css( "cursor", "pointer" );
  $("h2").click( function() {
    var probe = $(this).next();
    // No slideToggle() in Velocity: https://github.com/julianshapiro/velocity/issues/276
    if ( probe.css( "display" ) === "none" ) {
      $(this).nextUntil("h2").velocity( "slideDown", { duration: 500 } );
      $(this).velocity( "scroll", { duration: 750, offset: -50, easing: "ease-in-out" } );
    }
    else {
      $(this).nextUntil("h2").velocity( "slideUp", { duration: 500 } );
    }
  });
});
