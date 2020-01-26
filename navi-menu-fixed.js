$(function(){

var navigasi = $(".navi-menu-wrap").offset().top;
    var sticky = function(){
var srolltop = $(window).scrollTop();

if(srolltop > navigasi)
{
$(".navi-menu-wrap").addClass("fixed");
}else
{
$(".navi-menu-wrap").removeClass("fixed");
}

 };

sticky();
    $(window).scroll(function(){
sticky();
    });
  });
