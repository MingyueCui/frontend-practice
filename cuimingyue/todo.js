$(function () {

$('#myinput').keydown(function(e){
  var $boxs = $('.boxs');
  var $input = $('#myinput');
  if(e.keyCode==13){//回车时间绑定
    var value=$input.val();
    var text='<div class="box"><i class="fa fa-circle-thin" aria-hidden="true" id="notdone"></i><p class="content">'+value+'</p><i class="fa fa-trash" aria-hidden="true" id="trash"></i></div>';
    $boxs.html($boxs.html()+text);//增加新的box
  }
});
$(document).on('click', '#trash', function(e){
  $(e.target).parent().remove()
})
});
