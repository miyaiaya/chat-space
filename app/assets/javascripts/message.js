$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var image = message.image ? `<img src="${message.image}" class='lower-message__image'>` : "";
    var html =`<div class="message-content">
               <h5 class="message-content__name">
                 ${message.name}
               </h5>
               <span class= "message-content__date">
                 ${message.created_at}
               </span>
               </div>
               <div class="lower-message">
               <p class="message-content__text">
                 ${message.body}
               </p>
                ${image}
               </div>`;
    return html;
  }

  function scroll(){
    $('.show-message').animate({scrollTop: $('.show-message')[0].scrollHeight}, 'fast')
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.show-message').append(html)
      $('.form__form-area').val('')
      scroll();
      $('.send-button').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージを送信できませんでした');
    });
  });

   var interval = setInterval(funciton(){
    var last_message_id = $('.message-content').data('messageId');

      if(window.location.href.match(/\/groups\/\d+\/messages/)){
        $.ajax({
          url: location.href;,
          type: 'GET',
          data: { id: last_message_id},
          dataType: 'json'
        })
        .done(function(messages){
          var insertHTML ="";
          messages.forEach(function(message){
             insertHTML += buildHTML(message);
            $('.show-message').append(insertHTML);
            scroll();
          });
        })
        .fail(function(messages){
          alert('自動更新に失敗しました');
        })
      }else{
        clearInterval(interval);
      }
      } , 5000 );

});
