// scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() >= 550){
      // $('#top').fadeIn();
      $('#top').css({
          'bottom':'20px'
      });
  }
  else{
      // $('#top').fadeOut(); 
      $('#top').css({
          'bottom':'-60px'
      });
  }
});
$('#top').click(function(e){
  e.preventDefault();
  $('body,html').animate({
      scrollTop:0,
  },500);
});
// tab timer
var countDownData = new Date("jul 31,2023 15:37:25").getTime();
var x= setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownData-now;
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minute=Math.floor((distance%(1000*60*60))/(1000*60));
    var second=Math.floor((distance%(1000*60))/1000);
    var z=document.getElementsByClassName("demos");
    for(var i=0;i<z.length;i++){
        z[i].innerHTML=
        '<span id="day">'+days+'</span>'+
        '<span id="hours">'+hours+'</span>'+
        '<span id="minutes">'+minute+'</span>'+
        '<span id="second">'+second+'</span>'
    }
    if(distance<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML="";
        var y=document.getElementsByClassName("demos");
        for(var i=0;i<z.length;i++){
            y[i].innerHTML="";
        }
        var g=document.getElementsByClassName("after-ex");
        for(var i=0;i<z.length;i++){
            g[i].classList.add("offer-ex-text");
        }
        var d= document.getElementsByClassName("offer-ex-text-inner");
        for(var i=0;i<z.length;i++){
            d[i].innerHTML="به پایان رسیده"
        }
        var t= document.getElementsByClassName("offer-blur");
        for(var i=0;i<z.length;i++){
            t[i].style.filter="blur(2px)";
        }
    }
},1000);
// owl carsel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      rtl:true,
      items:4,
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      center:true,
      autoplay:true,
      slideBy:2,
      autoplayTimeout: 5000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false,
              center:false
          },
          1200:{
              items:4,
              nav:true,
              loop:false,
              center:false
          }
      }
  });
});