$(function(){
  $('.form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);

    $.ajax({
      url: '/messages/create',
      type: 'POST',
      data: formData,
      dataType: 'json'
      processData: false,
      contentType: false
    })
  });
});
