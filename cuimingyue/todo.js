$(function () {

$('#myinput').keydown(function(e){
  var $boxs = $('.boxs');
  var $input = $('#myinput');
  if(e.keyCode==13){//回车时间绑定
    var value=$input.val();
    var text='<div class="box"><i class="notdone fa fa-circle-thin " aria-hidden="true" ></i><p class="content">'+value+'</p><i class="trash fa fa-trash " aria-hidden="true" ></i></div>';
    $boxs.html($boxs.html()+text);//增加新的box
  }
});
$(document).on('click', '.trash', function(e){
  $(e.target).parent().remove()
})
$(document).on('click', '.notdone', function(e){
  var className=$(this).attr('class');
  if(className.indexOf("fa-circle-thin")!=-1){
    $(e.target).removeClass("fa-circle-thin");
    $(e.target).addClass("fa-check-circle-o");
    $(e.target).parent().css('text-decoration', 'line-through');
  }
  else{
    $(e.target).removeClass("fa-check-circle-o");
    $(e.target).addClass("fa-circle-thin");
    $(e.target).parent().css('text-decoration', 'none');
  }

})

});
