//window.alert ("Welcome to Rionna Glenn's website. Hope You Enjoy")
$(function(){
  var inDexValue;

    $('button').click( function() {
      if($('#userCmnt').val().length == ''){
       alert('Please Enter Your Comment');
       return true;
      }
      var userCmnt = $('#userCmnt').val();
      if($('#submit').hasClass('editNow')){

        $('#cmntContr>div.viewCmnt').eq(inDexValue).children('h4').html(userCmnt);

      }else{

    $('#cmntContr').append("<div class='viewCmnt'><h4>"+ userCmnt + "</h4><span class='edit'></span><span class='delete'></span></div>");
     }
      $('#userCmnt').val('');
      $(this).removeClass('editNow');
  });
  });
