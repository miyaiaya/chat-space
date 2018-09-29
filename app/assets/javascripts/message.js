$(function(){
  function buildHTML(message){
    image = message.image? `<img src="{message.image} class='lower-message__image'>`
    var html =`<div class="message-content">
               <h5 class="message-content__name">
                 ${message.user.name}
               </h5>
               <span class= "message-content__date">
                 ${message.created_at}
               </div>
               <div class="lower-message">
                 <p class="message-content__text">
                   ${message.body}
                 </p>
                   ${image}
               </div>`
    return html;
  }

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
    .done(function(){
      var html = buildHTML(data);
      $('.message-content__text').append(html)
      $('.form__form-area').val()
    })
  });
});
