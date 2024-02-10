// 렌딩페이지
$('.container').click(function(){
  $('.container').animate({top:'-150%'});
  $('.container').slideUp(300);
})


// 메인 술라이더
$(function(){
  $('.sliders').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover:false,
    swipe:true,  
  });
});

$(function(){
  $('.fade').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    pauseOnHover:false,
  });
})

//  search 메뉴
$('.sc_btn').click(function(){
  $('#search').animate({top:0}, 400, 'swing');
  $('.cover').fadeIn(400);
  $('#wrap').css({overflow:'hidden'})
})
$('.sc_close, .cover').click(function(){
  $('#search').animate({top:'-100%'}, 300, 'swing');
  $('.cover').fadeOut(300);
  $('#wrap').css({overflow:'auto'})
})

// lnb 슬라이드
$('.menuBtn').click(function(){
  $('#lnb').animate({left:0}, 300, 'swing');
  $('.cover').fadeIn(300);
  $('#wrap').css({overflow:'hidden'})
})

// 닫기
$('.close, .cover').click(function(){
  $('#lnb').animate({left:'-100%'}, 200, 'swing');
  $('.cover').fadeOut(200);
  $('#wrap').css({overflow:'auto'})
})