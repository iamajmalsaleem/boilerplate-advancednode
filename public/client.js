$(document).ready(function() {

  /*global io*/
  let socket = io();

  socket.on('user count', function(currentUsers) {
    console.log(currentUsers);
  });

  // Form submittion with new message in field with id 'm'
  $('form').submit(function() {
    var messageToSend = $('#m').val();

    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });

});
