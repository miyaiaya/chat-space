$(function(){
  $('.form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var html = $(this).attr('action');
    $.ajax({
      url: html,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});
