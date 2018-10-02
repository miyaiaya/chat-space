$(function(){
  function appendUser(user){
    var html =`<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">ユーザー名</p>
                 <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</a>
              </div>`
  }

  $('#user-search-field').on("keyup", function(){
    var input =$('#user-search-field').val();
    console.log(input);
  $.ajax({
    type: 'GET',
    url: '/users',
    data: { keyword: input},
    dataType: 'json'
  })
  });
});
