$(function () {
  var $boxs = $('.boxs');

  for(i=0;i<localStorage.length;i++){
    //alert(localStorage[localStorage.key(i)]);
    if(localStorage[localStorage.key(i)]==1){
    var html='<div class="box"><i class="notdone fa fa-circle-thin " aria-hidden="true" ></i><img src="done.png" class="done-image">  <textarea  class="content" >'+localStorage.key(i)+'" </textarea><i class="trash fa fa-trash " aria-hidden="true" ></i></div>';
    $boxs.html($boxs.html()+html);
 }
}
$('#myinput').keydown(function(e){
  var $input = $('#myinput');
  if(e.keyCode==13){//回车时间绑定
    var value=$input.val();
    localStorage.setItem(value, '1');
    var text='<div class="box"><i class="notdone fa fa-circle-thin " aria-hidden="true" ></i><img src="done.png" class="done-image">  <textarea  class="content" >'+value+'" </textarea><i class="trash fa fa-trash " aria-hidden="true" ></i></div>';
    $boxs.html($boxs.html()+text);//增加新的box
  }
});
$(document).on('click', '.trash', function(e){
  var del_content=$(e.target).prev().val();
  localStorage.removeItem(del_content);
  $(e.target).parent().remove();
  $(e.target).parent().hide();
})
$(document).on('click', '.notdone', function(e){
  var className=$(this).attr('class');
  var keyname=$(e.target).next().next().val();
  if(className.indexOf("fa-circle-thin")!=-1){//未完成向已完成转化
    localStorage.removeItem(keyname);
    $(e.target).removeClass("fa-circle-thin");
    $(e.target).addClass("fa-check-circle-o");
    $(e.target).next().css('visibility','visible');//盖章
  }
  else{//已经完成被标记成未完成
    $(e.target).removeClass("fa-check-circle-o");
    $(e.target).addClass("fa-circle-thin");
    $(e.target).next().css('visibility','hidden')
  }
})

});
