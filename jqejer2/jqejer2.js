//https://api.jquery.com/toggleclass/
$( "#i1" ).click(function() {
  $( this ).toggleClass( "p1" );
  $('#i3').toggle('slow');
  $('#i2').toggle('slow');
});


$( "#i2" ).click(function() {
  $( this ).toggleClass( "p1" );
  $('#i1').toggle('slow');
  $('#i3').toggle('slow');
});

$( "#i3" ).click(function() {
  $( this ).toggleClass( "p1" );
  $('#i1').toggle('slow');
  $('#i2').toggle('slow');
});